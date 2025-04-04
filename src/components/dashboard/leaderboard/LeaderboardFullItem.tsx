
import React from "react";
import { TrendingUp, Award, Medal, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Influencer } from "./leaderboardData";

interface BadgeIconProps {
  position: number;
}

const BadgeIcon = ({ position }: BadgeIconProps) => {
  if (position === 1) return <Trophy className="w-3.5 h-3.5 mr-1 text-yellow-600" />;
  if (position === 2) return <Medal className="w-3.5 h-3.5 mr-1 text-gray-500" />;
  if (position === 3) return <Medal className="w-3.5 h-3.5 mr-1 text-orange-600" />;
  return null;
};

interface LeaderboardFullItemProps {
  influencer: Influencer;
}

export const LeaderboardFullItem = ({ influencer }: LeaderboardFullItemProps) => {
  const getBadgeVariant = (rank: number) => {
    if (rank === 1) return "gold";
    if (rank === 2 || rank === 3) return "silver";
    return "bronze";
  };
  
  const getBadgeLabel = (rank: number) => {
    if (rank === 1) return "Ouro";
    if (rank === 2 || rank === 3) return "Prata";
    return "Bronze";
  };

  return (
    <div 
      className="flex items-center p-3 rounded-lg hover:bg-gray-50 border border-gray-100"
    >
      <div className="font-semibold text-lg text-gray-400 w-6">{influencer.rank}</div>
      <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
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
      <div className="flex items-center mr-4">
        <Badge variant={getBadgeVariant(influencer.rank)}>
          <BadgeIcon position={influencer.rank} />
          {getBadgeLabel(influencer.rank)}
        </Badge>
      </div>
      <div className="text-right">
        <div className="text-xl font-bold">{influencer.points}</div>
        <div className="flex items-center text-sm text-green-600">
          <TrendingUp className="w-3 h-3 mr-1" />
          <span>+{Math.floor(Math.random() * 50)} esta semana</span>
        </div>
      </div>
    </div>
  );
};
