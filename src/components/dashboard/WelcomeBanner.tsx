
import React from "react";

interface WelcomeBannerProps {
  restaurantName: string;
  description: string;
}

const WelcomeBanner = ({ restaurantName, description }: WelcomeBannerProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Bem-vindo, {restaurantName}! 👋</h2>
      <p className="text-gray-600 mb-6">{description}</p>
    </div>
  );
};

export default WelcomeBanner;
