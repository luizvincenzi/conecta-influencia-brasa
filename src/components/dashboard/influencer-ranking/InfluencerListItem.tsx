
import React from "react";
import { RatingStars } from "./RatingStars";

interface InfluencerListItemProps {
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
}

export const InfluencerListItem = ({ influencer, index }: InfluencerListItemProps) => {
  return (
    <div className="flex items-center p-3 rounded-lg hover:bg-gray-50">
      <div className="font-semibold text-lg text-gray-400 w-6">{index}</div>
      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
        <img src={influencer.avatar} alt={influencer.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="font-medium">{influencer.name}</div>
        <div className="text-sm text-gray-500">{influencer.handle}</div>
        <RatingStars rating={influencer.rating} reviews={influencer.reviews} size="sm" />
      </div>
      <div className="text-right">
        <div className="font-semibold">{influencer.conversion} conversões</div>
        <div className="text-sm text-gray-500">Engajamento: {influencer.engagement}</div>
      </div>
    </div>
  );
};
