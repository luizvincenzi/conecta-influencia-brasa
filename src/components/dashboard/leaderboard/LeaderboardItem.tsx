
import React from "react";
import { LeaderboardBadge } from "./LeaderboardBadge";
import { Influencer } from "./leaderboardData";

interface LeaderboardItemProps {
  influencer: Influencer;
  isCurrentUser: boolean;
}

export const LeaderboardItem = ({ influencer, isCurrentUser }: LeaderboardItemProps) => {
  return (
    <div 
      className={`flex items-center p-3 rounded-lg ${
        isCurrentUser 
          ? "bg-blue-50 border border-blue-100" 
          : "hover:bg-gray-50"
      }`}
    >
      <div className="font-semibold text-lg text-gray-400 w-6">{influencer.rank}</div>
      <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden mr-3">
        <img 
          src={`https://i.pravatar.cc/150?img=${influencer.id + 4}`} 
          alt={influencer.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="flex-1">
        <div className="font-medium">{influencer.name}</div>
        <div className="text-sm text-gray-500">{influencer.handle}</div>
      </div>
      <div className="flex items-center">
        <LeaderboardBadge type={influencer.badge} small />
        <div className="ml-2 text-lg font-bold">{influencer.points}</div>
      </div>
    </div>
  );
};
