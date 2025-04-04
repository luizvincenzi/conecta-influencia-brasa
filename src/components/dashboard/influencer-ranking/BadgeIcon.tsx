
import React from "react";
import { Trophy, Medal } from "lucide-react";

interface BadgeIconProps {
  position: number;
}

export const BadgeIcon = ({ position }: BadgeIconProps) => {
  if (position === 1) return <Trophy className="w-3.5 h-3.5 mr-1 text-yellow-600" />;
  if (position === 2) return <Medal className="w-3.5 h-3.5 mr-1 text-gray-500" />;
  if (position === 3) return <Medal className="w-3.5 h-3.5 mr-1 text-orange-600" />;
  return null;
};
