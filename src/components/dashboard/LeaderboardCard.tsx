
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
import { Trophy } from "lucide-react";
import { LeaderboardBadge } from "./leaderboard/LeaderboardBadge";
import { CurrentUserCard } from "./leaderboard/CurrentUserCard";
import { LeaderboardItem } from "./leaderboard/LeaderboardItem";
import { LeaderboardDialog } from "./leaderboard/LeaderboardDialog";
import { LEADERBOARD } from "./leaderboard/leaderboardData";

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
              <LeaderboardDialog />
            </DialogContent>
          </Dialog>
        </div>
        <CardDescription>Ranking dos melhores influenciadores da região</CardDescription>
      </CardHeader>
      <CardContent>
        <CurrentUserCard currentUser={currentUser} />
        
        <div className="space-y-3">
          {LEADERBOARD.slice(0, 5).map((influencer) => (
            <LeaderboardItem 
              key={influencer.id}
              influencer={influencer}
              isCurrentUser={influencer.id === currentUser.id}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
