
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Star, Trophy, Award, TrendingUp, Medal, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample data for the component
const INFLUENCERS = [
  { id: 1, name: "Ana Silva", handle: "@gourmetpaulista", conversion: 42, engagement: "8.5%", avatar: "https://i.pravatar.cc/150?img=11", rating: 5.0, reviews: 24 },
  { id: 2, name: "Pedro Santos", handle: "@pedrosantos", conversion: 36, engagement: "7.3%", avatar: "https://i.pravatar.cc/150?img=2", rating: 4.8, reviews: 18 },
  { id: 3, name: "Carla Mendes", handle: "@carlamendes", conversion: 29, engagement: "6.8%", avatar: "https://i.pravatar.cc/150?img=3", rating: 4.5, reviews: 15 },
];

const BadgeIcon = ({ position }: { position: number }) => {
  if (position === 1) return <Trophy className="w-3.5 h-3.5 mr-1 text-yellow-600" />;
  if (position === 2) return <Medal className="w-3.5 h-3.5 mr-1 text-gray-500" />;
  if (position === 3) return <Medal className="w-3.5 h-3.5 mr-1 text-orange-600" />;
  return null;
};

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
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-4 mb-4 border border-yellow-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400 mr-3">
                <img src={INFLUENCERS[0].avatar} alt={INFLUENCERS[0].name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 text-yellow-500 mr-1.5" />
                  <h3 className="font-medium text-lg">{INFLUENCERS[0].name}</h3>
                </div>
                <div className="text-gray-500">{INFLUENCERS[0].handle}</div>
                <div className="flex items-center mt-1">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < Math.floor(INFLUENCERS[0].rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                  <span className="ml-1 text-sm">{INFLUENCERS[0].rating} ({INFLUENCERS[0].reviews})</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{INFLUENCERS[0].conversion} conversões</div>
              <Badge variant="gold" className="mt-1">Ouro</Badge>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          {INFLUENCERS.slice(1).map((influencer, index) => (
            <div key={influencer.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50">
              <div className="font-semibold text-lg text-gray-400 w-6">{index + 2}</div>
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
              <div className="text-right">
                <div className="font-semibold">{influencer.conversion} conversões</div>
                <div className="text-sm text-gray-500">Engajamento: {influencer.engagement}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const InfluencerRankingFull = () => {
  const [activeInfluencer, setActiveInfluencer] = useState<number | null>(null);
  
  const allInfluencers = [
    ...INFLUENCERS,
    { id: 4, name: "Marcos Oliveira", handle: "@marcosoliveira", conversion: 25, engagement: "5.9%", avatar: "https://i.pravatar.cc/150?img=4", rating: 4.2, reviews: 12 },
    { id: 5, name: "Lucia Ferreira", handle: "@luciaferreira", conversion: 22, engagement: "5.2%", avatar: "https://i.pravatar.cc/150?img=5", rating: 4.0, reviews: 9 },
    { id: 6, name: "Bruno Costa", handle: "@brunocosta", conversion: 18, engagement: "4.7%", avatar: "https://i.pravatar.cc/150?img=6", rating: 3.8, reviews: 7 },
  ];
  
  const handleRate = (influencerId: number, rating: number) => {
    // In a real app, this would save the rating to the database
    console.log(`Rating influencer ${influencerId} with ${rating} stars`);
    setActiveInfluencer(null);
  };
  
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
    <div className="py-4">
      <div className="flex items-center mb-4">
        <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
        <h2 className="text-xl font-semibold">Ranking de Influenciadores</h2>
      </div>
      
      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
        {allInfluencers.map((influencer, index) => (
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
            {activeInfluencer === influencer.id ? (
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button 
                    key={star}
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleRate(influencer.id, star)} 
                    className="px-1"
                  >
                    <Star className={`h-5 w-5 ${star <= 3 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                  </Button>
                ))}
              </div>
            ) : (
              <Button variant="outline" size="sm" onClick={() => setActiveInfluencer(influencer.id)}>
                Avaliar
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerRanking;
