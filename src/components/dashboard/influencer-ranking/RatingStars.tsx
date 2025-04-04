
import React from "react";
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  reviews?: number;
  size?: "sm" | "md";
  showReviews?: boolean;
}

export const RatingStars = ({ 
  rating, 
  reviews, 
  size = "md", 
  showReviews = true 
}: RatingStarsProps) => {
  const starSize = size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5";
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  
  return (
    <div className="flex items-center mt-0.5">
      {Array(5).fill(0).map((_, i) => (
        <Star 
          key={i} 
          className={`${starSize} ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
        />
      ))}
      {reviews !== undefined && showReviews && (
        <span className={`ml-1 ${textSize}`}>
          {size === "sm" ? `(${reviews})` : `${rating} (${reviews})`}
        </span>
      )}
    </div>
  );
};
