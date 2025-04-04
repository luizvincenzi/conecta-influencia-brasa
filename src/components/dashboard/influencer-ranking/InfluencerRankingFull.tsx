
import React, { useState } from "react";
import { Trophy, Star } from "lucide-react";
import { FullRankingItem } from "./FullRankingItem";

// Sample data for the component
const INFLUENCERS = [
  { id: 1, name: "Ana Silva", handle: "@gourmetpaulista", conversion: 42, engagement: "8.5%", avatar: "https://i.pravatar.cc/150?img=11", rating: 5.0, reviews: 24 },
  { id: 2, name: "Pedro Santos", handle: "@pedrosantos", conversion: 36, engagement: "7.3%", avatar: "https://i.pravatar.cc/150?img=2", rating: 4.8, reviews: 18 },
  { id: 3, name: "Carla Mendes", handle: "@carlamendes", conversion: 29, engagement: "6.8%", avatar: "https://i.pravatar.cc/150?img=3", rating: 4.5, reviews: 15 },
  { id: 4, name: "Marcos Oliveira", handle: "@marcosoliveira", conversion: 25, engagement: "5.9%", avatar: "https://i.pravatar.cc/150?img=4", rating: 4.2, reviews: 12 },
  { id: 5, name: "Lucia Ferreira", handle: "@luciaferreira", conversion: 22, engagement: "5.2%", avatar: "https://i.pravatar.cc/150?img=5", rating: 4.0, reviews: 9 },
  { id: 6, name: "Bruno Costa", handle: "@brunocosta", conversion: 18, engagement: "4.7%", avatar: "https://i.pravatar.cc/150?img=6", rating: 3.8, reviews: 7 },
];

export const InfluencerRankingFull = () => {
  const [activeInfluencer, setActiveInfluencer] = useState<number | null>(null);
  
  const handleRate = (influencerId: number, rating: number) => {
    // In a real app, this would save the rating to the database
    console.log(`Rating influencer ${influencerId} with ${rating} stars`);
    setActiveInfluencer(null);
  };
  
  return (
    <div className="py-4">
      <div className="flex items-center mb-4">
        <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
        <h2 className="text-xl font-semibold">Ranking de Influenciadores</h2>
      </div>
      
      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
        {INFLUENCERS.map((influencer, index) => (
          <FullRankingItem
            key={influencer.id}
            influencer={influencer}
            index={index}
            activeInfluencer={activeInfluencer}
            setActiveInfluencer={setActiveInfluencer}
            onRate={handleRate}
          />
        ))}
      </div>
    </div>
  );
};
