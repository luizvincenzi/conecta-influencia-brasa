
import React from "react";
import { Award } from "lucide-react";

interface BadgeProps {
  type: string;
  small?: boolean;
}

export const LeaderboardBadge = ({ type, small = false }: BadgeProps) => {
  let icon;
  let bgColor;
  let textColor;
  
  if (type === "gold") {
    icon = <Award className={small ? "w-3 h-3" : "w-4 h-4"} />;
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-800";
  } else if (type === "silver") {
    icon = <Award className={small ? "w-3 h-3" : "w-4 h-4"} />;
    bgColor = "bg-gray-100";
    textColor = "text-gray-800";
  } else {
    icon = <Award className={small ? "w-3 h-3" : "w-4 h-4"} />;
    bgColor = "bg-orange-100";
    textColor = "text-orange-800";
  }
  
  return (
    <div className={`flex items-center ${bgColor} ${textColor} rounded-full ${small ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"}`}>
      {icon}
      <span className="ml-1">{type === "gold" ? "Gold" : type === "silver" ? "Silver" : "Bronze"}</span>
    </div>
  );
};
