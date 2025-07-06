# PrepPal - Peer-Powered Mock Interview Platform

PrepPal is a peer-to-peer mock interview platform that connects users for live mock interviews based on domain, interview type, and skill level. Built with Next.js, Firebase, and Stream.io for a modern, scalable experience.

## 🌟 Features

- **Peer Matching**: Smart algorithm matches users based on domain, skill level, and interview type
- **Live Video Sessions**: High-quality video calls powered by Stream.io
- **AI Fallback**: AI interviewer available when no peer match is found
- **Authentication**: Secure Firebase Authentication with Google Sign-in
- **Gamification**: Points system and leaderboards (coming soon)
- **Cross-College Network**: Connect with students from different institutions
- **Expert Features**: Resume reviews and mentorship (premium tier - coming soon)

## 🚀 Tech Stack

- **Frontend**: Next.js 15 with TypeScript and App Router
- **Styling**: Tailwind CSS with custom design system
- **Authentication**: Firebase Authentication
- **Database**: Firestore (NoSQL)
- **Video**: Stream.io Video SDK
- **UI Components**: Custom components with Lucide React icons
- **Fonts**: Playfair Display, Nunito, Indie Flower, Montserrat

## 🎨 Design System

- **Color Scheme**: Light beige (#F5F5DC) background with soft orange (#FFCC80) accents
- **Typography**: Creative yet professional font combinations
- **Theme**: Modern, accessible design with smooth animations

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd preppal
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Firebase and Stream.io credentials:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Stream Video Configuration
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key_here
STREAM_SECRET_KEY=your_stream_secret_key_here
```

4. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Enable Google Sign-in provider
   - Copy your config values to `.env.local`

5. **Set up Stream.io**
   - Create an account at [Stream.io](https://getstream.io/)
   - Create a new video app
   - Copy your API keys to `.env.local`

6. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with fonts and auth provider
│   └── page.tsx          # Landing page
├── components/
│   ├── auth/              # Authentication components
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── landing/           # Landing page components
│   │   └── FeatureCard.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Input.tsx
├── contexts/
│   └── AuthContext.tsx    # Firebase authentication context
└── lib/
    ├── firebase.ts        # Firebase configuration
    └── utils.ts          # Utility functions
```

## 🔧 Configuration

### Firebase Setup
1. Create collections in Firestore:
   - `users` - User profiles and preferences
   - `matches` - Interview matching records
   - `sessions` - Video session data

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /matches/{matchId} {
      allow read, write: if request.auth != null;
    }
    
    match /sessions/{sessionId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🎯 Current Status

**MVP Development** - Core features implemented:
- ✅ Landing page with modern design
- ✅ Firebase Authentication (Email/Password + Google)
- ✅ User registration and profile creation
- ✅ Responsive design with custom animations
- ✅ TypeScript implementation
- 🔄 Video integration (Stream.io setup ready)
- 🔄 Peer matching algorithm
- 🔄 Interview session management

## 📅 Roadmap

### Phase 1 (Current - July 2025)
- Complete video integration
- Implement matching algorithm
- Basic interview session flow
- Feedback system

### Phase 2 (Q3 2025)
- Gamification features
- Advanced matching criteria
- Mobile responsiveness improvements
- Performance optimizations

### Phase 3 (Q4 2025)
- Expert features (resume reviews)
- Cross-college collaboration
- Analytics dashboard
- Premium tier

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please reach out to [your-email@example.com](mailto:your-email@example.com).

---

**PrepPal** - Empowering the next generation of professionals through peer-powered interview practice. 🚀
