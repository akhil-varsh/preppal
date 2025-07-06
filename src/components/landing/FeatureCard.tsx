import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card className="h-full transition-transform hover:scale-105 duration-300">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4 text-[var(--primary)]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold font-montserrat mb-2">{title}</h3>
        <p className="text-gray-600 font-nunito">{description}</p>
      </CardContent>
    </Card>
  );
};
