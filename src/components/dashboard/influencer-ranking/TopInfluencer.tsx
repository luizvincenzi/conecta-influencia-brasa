
import React from "react";
import { Trophy } from "lucide-react";
import { RatingStars } from "./RatingStars";
import { Badge } from "@/components/ui/badge";

interface TopInfluencerProps {
  influencer: {
    id: number;
    name: string;
    handle: string;
    conversion: number;
    engagement: string;
    avatar: string;
    rating: number;
    reviews: number;
  };
}

export const TopInfluencer = ({ influencer }: TopInfluencerProps) => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-4 mb-4 border border-yellow-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400 mr-3">
            <img src={influencer.avatar} alt={influencer.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center">
              <Trophy className="w-4 h-4 text-yellow-500 mr-1.5" />
              <h3 className="font-medium text-lg">{influencer.name}</h3>
            </div>
            <div className="text-gray-500">{influencer.handle}</div>
            <RatingStars rating={influencer.rating} reviews={influencer.reviews} />
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold">{influencer.conversion} conversões</div>
          <Badge variant="gold" className="mt-1">Ouro</Badge>
        </div>
      </div>
    </div>
  );
};
