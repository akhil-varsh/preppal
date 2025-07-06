'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  userProfile: UserProfile | null;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<void>;
}

interface UserProfile {
  uid: string;
  email: string;
  name: string;
  domain?: string;
  skillLevel?: string;
  interviewType?: string;
  college?: string;
  points?: number;
  bio?: string;
  interviewTypes?: string[];
  availability?: string[];
  createdAt: Date;
  updatedAt?: Date;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const createUserProfile = async (user: User, additionalData: Record<string, unknown> = {}) => {
    const userRef = doc(db, 'users', user.uid);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      const { displayName, email } = user;
      const createdAt = new Date();

      try {
        await setDoc(userRef, {
          name: displayName || additionalData.name,
          email,
          points: 0,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.error('Error creating user profile:', error);
      }
    }

    return getUserProfile(user.uid);
  };

  const getUserProfile = async (uid: string) => {
    const userRef = doc(db, 'users', uid);
    const snapshot = await getDoc(userRef);
    
    if (snapshot.exists()) {
      return { uid, ...snapshot.data() } as UserProfile;
    }
    return null;
  };

  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    if (!user) {
      throw new Error('No user logged in');
    }

    try {
      const userRef = doc(db, 'users', user.uid);
      const updateData = {
        ...updates,
        updatedAt: new Date()
      };

      await updateDoc(userRef, updateData);
      
      // Update local state
      const updatedProfile = await getUserProfile(user.uid);
      setUserProfile(updatedProfile);
      
      // Update Firebase Auth display name if name is updated
      if (updates.name && updates.name !== user.displayName) {
        await updateProfile(user, { displayName: updates.name });
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: name });
      await createUserProfile(result.user, { name });
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await createUserProfile(result.user);
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      setUserProfile(null);
      router.push('/');
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const profile = await getUserProfile(user.uid);
        setUserProfile(profile);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    logout,
    userProfile,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
