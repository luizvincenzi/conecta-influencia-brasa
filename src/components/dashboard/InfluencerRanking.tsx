
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
import { Star } from "lucide-react";

// Sample data for the component
const INFLUENCERS = [
  { id: 1, name: "Ana Silva", handle: "@anasilva", conversion: 42, engagement: "8.5%", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Pedro Santos", handle: "@pedrosantos", conversion: 36, engagement: "7.3%", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Carla Mendes", handle: "@carlamendes", conversion: 29, engagement: "6.8%", avatar: "https://i.pravatar.cc/150?img=3" },
];

const InfluencerRanking = () => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Ranking de Influenciadores</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-[#0071e3] hover:text-[#0262c2] hover:bg-blue-50">
                Ver Todos
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
        <div className="space-y-3">
          {INFLUENCERS.map((influencer, index) => (
            <div key={influencer.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50">
              <div className="font-semibold text-lg text-gray-400 w-6">{index + 1}</div>
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img src={influencer.avatar} alt={influencer.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{influencer.name}</div>
                <div className="text-sm text-gray-500">{influencer.handle}</div>
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
    { id: 4, name: "Marcos Oliveira", handle: "@marcosoliveira", conversion: 25, engagement: "5.9%", avatar: "https://i.pravatar.cc/150?img=4" },
    { id: 5, name: "Lucia Ferreira", handle: "@luciaferreira", conversion: 22, engagement: "5.2%", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: 6, name: "Bruno Costa", handle: "@brunocosta", conversion: 18, engagement: "4.7%", avatar: "https://i.pravatar.cc/150?img=6" },
  ];
  
  const handleRate = (influencerId: number, rating: number) => {
    // In a real app, this would save the rating to the database
    console.log(`Rating influencer ${influencerId} with ${rating} stars`);
    setActiveInfluencer(null);
  };
  
  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-4">Todos os Influenciadores</h2>
      
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
            </div>
            <div className="text-right mr-3">
              <div className="font-semibold">{influencer.conversion} conversões</div>
              <div className="text-sm text-gray-500">Engajamento: {influencer.engagement}</div>
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
