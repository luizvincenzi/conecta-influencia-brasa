
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Crown } from "lucide-react";
import { TopInfluencer } from "./influencer-ranking/TopInfluencer";
import { InfluencerListItem } from "./influencer-ranking/InfluencerListItem";
import { InfluencerRankingFull } from "./influencer-ranking/InfluencerRankingFull";

// Sample data for the component
const INFLUENCERS = [
  { id: 1, name: "Ana Silva", handle: "@gourmetpaulista", conversion: 42, engagement: "8.5%", avatar: "https://i.pravatar.cc/150?img=11", rating: 5.0, reviews: 24 },
  { id: 2, name: "Pedro Santos", handle: "@pedrosantos", conversion: 36, engagement: "7.3%", avatar: "https://i.pravatar.cc/150?img=2", rating: 4.8, reviews: 18 },
  { id: 3, name: "Carla Mendes", handle: "@carlamendes", conversion: 29, engagement: "6.8%", avatar: "https://i.pravatar.cc/150?img=3", rating: 4.5, reviews: 15 },
];

const InfluencerRanking = () => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Crown className="text-yellow-500 mr-2 h-5 w-5" />
            <CardTitle>Melhores Influenciadores</CardTitle>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-[#0071e3] hover:text-[#0262c2] hover:bg-blue-50">
                Ver Ranking Completo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
              <InfluencerRankingFull />
            </DialogContent>
          </Dialog>
        </div>
        <CardDescription>Os influenciadores que mais trouxeram resultados</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Top influencer highlighted */}
        <TopInfluencer influencer={INFLUENCERS[0]} />
        
        <div className="space-y-3">
          {INFLUENCERS.slice(1).map((influencer, index) => (
            <InfluencerListItem 
              key={influencer.id}
              influencer={influencer}
              index={index + 2}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InfluencerRanking;
