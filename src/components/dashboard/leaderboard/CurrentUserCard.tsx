
import React from "react";
import { Trophy } from "lucide-react";
import { LeaderboardBadge } from "./LeaderboardBadge";
import { Influencer } from "./leaderboardData";

interface CurrentUserCardProps {
  currentUser: Influencer;
}

export const CurrentUserCard = ({ currentUser }: CurrentUserCardProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-4 border border-blue-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-3">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-medium">Sua Posição</h3>
            <div className="flex items-center mt-1">
              <span className="text-2xl font-bold mr-2">{currentUser.rank}º</span>
              <LeaderboardBadge type={currentUser.badge} />
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500">Seus pontos</span>
          <div className="text-2xl font-bold">{currentUser.points}</div>
        </div>
      </div>
    </div>
  );
};
