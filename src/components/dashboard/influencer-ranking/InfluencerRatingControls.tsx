
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InfluencerRatingControlsProps {
  influencerId: number;
  activeInfluencer: number | null;
  setActiveInfluencer: (id: number | null) => void;
  onRate: (influencerId: number, rating: number) => void;
}

export const InfluencerRatingControls = ({ 
  influencerId, 
  activeInfluencer, 
  setActiveInfluencer,
  onRate 
}: InfluencerRatingControlsProps) => {
  if (activeInfluencer === influencerId) {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Button 
            key={star}
            variant="ghost" 
            size="sm"
            onClick={() => onRate(influencerId, star)} 
            className="px-1"
          >
            <Star className={`h-5 w-5 ${star <= 3 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          </Button>
        ))}
      </div>
    );
  }
  
  return (
    <Button variant="outline" size="sm" onClick={() => setActiveInfluencer(influencerId)}>
      Avaliar
    </Button>
  );
};
