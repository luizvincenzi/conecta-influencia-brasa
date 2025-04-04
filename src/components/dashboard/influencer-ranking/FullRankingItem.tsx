
import React from "react";
import { TrendingUp, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BadgeIcon } from "./BadgeIcon";
import { InfluencerRatingControls } from "./InfluencerRatingControls";

interface FullRankingItemProps {
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
  index: number;
  activeInfluencer: number | null;
  setActiveInfluencer: (id: number | null) => void;
  onRate: (influencerId: number, rating: number) => void;
}

export const FullRankingItem = ({ 
  influencer, 
  index, 
  activeInfluencer, 
  setActiveInfluencer, 
  onRate 
}: FullRankingItemProps) => {
  const getBadgeVariant = (index: number) => {
    if (index === 0) return "gold";
    if (index === 1 || index === 2) return "silver";
    return "bronze";
  };
  
  const getBadgeLabel = (index: number) => {
    if (index === 0) return "Ouro";
    if (index === 1 || index === 2) return "Prata";
    return "Bronze";
  };

  return (
    <div key={influencer.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50 border border-gray-100">
      <div className="font-semibold text-lg text-gray-400 w-6">{index + 1}</div>
      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
        <img src={influencer.avatar} alt={influencer.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="font-medium">{influencer.name}</div>
        <div className="text-sm text-gray-500">{influencer.handle}</div>
        <div className="flex items-center mt-0.5">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < Math.floor(influencer.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
            />
          ))}
          <span className="ml-1 text-xs">({influencer.reviews})</span>
        </div>
      </div>
      <div className="text-right mr-3">
        <div className="font-semibold">{influencer.conversion} conversões</div>
        <div className="text-sm text-gray-500">Engajamento: {influencer.engagement}</div>
        <Badge variant={getBadgeVariant(index)} className="mt-1">
          <BadgeIcon position={index + 1} />
          {getBadgeLabel(index)}
        </Badge>
      </div>
      <InfluencerRatingControls 
        influencerId={influencer.id}
        activeInfluencer={activeInfluencer}
        setActiveInfluencer={setActiveInfluencer}
        onRate={onRate}
      />
    </div>
  );
};
