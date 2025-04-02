
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
import { Trophy, Award, TrendingUp } from "lucide-react";

// Sample data for the component
const LEADERBOARD = [
  { id: 1, name: "Ana Silva", handle: "@anasilva", points: 950, rank: 1, badge: "gold" },
  { id: 2, name: "Pedro Santos", handle: "@pedrosantos", points: 820, rank: 2, badge: "gold" },
  { id: 3, name: "Carla Mendes", handle: "@carlamendes", points: 780, rank: 3, badge: "gold" },
  { id: 4, name: "Marcos Oliveira", handle: "@marcosoliveira", points: 650, rank: 4, badge: "silver" },
  { id: 5, name: "Lucia Ferreira", handle: "@luciaferreira", points: 580, rank: 5, badge: "silver" },
];

const LeaderboardCard = () => {
  // Find current user
  const currentUser = LEADERBOARD[0]; // For this example, assume the first one is the logged-in user
  
  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Campeonato de Influenciadores</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-[#0071e3] hover:text-[#0262c2] hover:bg-blue-50">
                Ver Tabela Completa
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
              <LeaderboardFull />
            </DialogContent>
          </Dialog>
        </div>
        <CardDescription>Ranking dos melhores influenciadores da região</CardDescription>
      </CardHeader>
      <CardContent>
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
                  <Badge type={currentUser.badge} />
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Seus pontos</span>
              <div className="text-2xl font-bold">{currentUser.points}</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          {LEADERBOARD.slice(0, 5).map((influencer) => (
            <div 
              key={influencer.id} 
              className={`flex items-center p-3 rounded-lg ${
                influencer.id === currentUser.id 
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
                <Badge type={influencer.badge} small />
                <div className="ml-2 text-lg font-bold">{influencer.points}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface BadgeProps {
  type: string;
  small?: boolean;
}

const Badge = ({ type, small = false }: BadgeProps) => {
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

const LeaderboardFull = () => {
  // Extended leaderboard data
  const extendedLeaderboard = [
    ...LEADERBOARD,
    { id: 6, name: "Bruno Costa", handle: "@brunocosta", points: 520, rank: 6, badge: "silver" },
    { id: 7, name: "Mariana Dias", handle: "@marianadias", points: 480, rank: 7, badge: "silver" },
    { id: 8, name: "Ricardo Lima", handle: "@ricardolima", points: 450, rank: 8, badge: "bronze" },
    { id: 9, name: "Fernanda Rocha", handle: "@fernandarocha", points: 420, rank: 9, badge: "bronze" },
    { id: 10, name: "Paulo Vieira", handle: "@paulovieira", points: 380, rank: 10, badge: "bronze" },
  ];
  
  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-2">Campeonato Paulista de Conteúdo</h2>
      <p className="text-gray-500 mb-6">
        Classificação atualizada dos melhores influenciadores da região.
        Os pontos são baseados no engajamento das postagens e resultados das campanhas.
      </p>
      
      <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2">
        {extendedLeaderboard.map((influencer) => (
          <div 
            key={influencer.id} 
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
              <Badge type={influencer.badge} />
            </div>
            <div className="text-right">
              <div className="text-xl font-bold">{influencer.points}</div>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                <span>+{Math.floor(Math.random() * 50)} esta semana</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
        <h3 className="font-medium mb-2">Como funcionam os pontos</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Cada curtida vale 0.5 pontos</li>
          <li>• Cada comentário vale 2 pontos</li>
          <li>• Cada compartilhamento vale 3 pontos</li>
          <li>• Conversões rastreadas valem 10 pontos cada</li>
          <li>• Bônus de 50 pontos para o influenciador com melhor performance da campanha</li>
        </ul>
      </div>
    </div>
  );
};

export default LeaderboardCard;
