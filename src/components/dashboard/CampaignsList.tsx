
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
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Sample data for the component
const CAMPAIGNS = [
  { 
    id: 1, 
    name: "Lançamento Menu de Verão", 
    status: "active", 
    startDate: "10/11/2023", 
    endDate: "10/12/2023", 
    influencers: 8, 
    engagement: 1243, 
    competition: 65 
  },
  { 
    id: 2, 
    name: "Promoção de Fim de Semana", 
    status: "active", 
    startDate: "01/12/2023", 
    endDate: "15/12/2023", 
    influencers: 4, 
    engagement: 876, 
    competition: 42 
  },
  { 
    id: 3, 
    name: "Black Friday", 
    status: "past", 
    startDate: "20/11/2023", 
    endDate: "27/11/2023", 
    influencers: 12, 
    engagement: 3452, 
    competition: 100 
  },
];

const CampaignsList = () => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Campanhas</CardTitle>
          <Button variant="outline" className="text-[#0071e3] border-[#0071e3] hover:bg-blue-50 hover:text-[#0262c2]" onClick={() => {
            window.location.href = "https://wa.me/5511123456789?text=Olá,%20gostaria%20de%20criar%20uma%20nova%20campanha";
          }}>
            Nova Campanha
          </Button>
        </div>
        <CardDescription>Campanhas ativas e passadas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {CAMPAIGNS.map((campaign) => (
            <Dialog key={campaign.id}>
              <DialogTrigger asChild>
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">{campaign.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{campaign.startDate} - {campaign.endDate}</span>
                      </div>
                    </div>
                    <Badge variant={campaign.status === "active" ? "default" : "secondary"}>
                      {campaign.status === "active" ? "Ativa" : "Finalizada"}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-500">Influenciadores:</span>{" "}
                      <span className="font-medium">{campaign.influencers}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Engajamento:</span>{" "}
                      <span className="font-medium">{campaign.engagement}</span>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center mb-1">
                        <Trophy className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                        <span className="text-gray-500">Competição:</span>
                      </div>
                      <Progress value={campaign.competition} className="h-2" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <CampaignDetails campaign={campaign} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface Campaign {
  id: number;
  name: string;
  status: string;
  startDate: string;
  endDate: string;
  influencers: number;
  engagement: number;
  competition: number;
}

const CampaignDetails = ({ campaign }: { campaign: Campaign }) => {
  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold">{campaign.name}</h2>
      <Badge variant={campaign.status === "active" ? "default" : "secondary"} className="mt-2">
        {campaign.status === "active" ? "Ativa" : "Finalizada"}
      </Badge>
      
      <div className="mt-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm text-gray-500">Data de Início</h3>
            <p className="font-medium">{campaign.startDate}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Data de Término</h3>
            <p className="font-medium">{campaign.endDate}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Influenciadores</h3>
            <p className="font-medium">{campaign.influencers}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Engajamento Total</h3>
            <p className="font-medium">{campaign.engagement}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm text-gray-500 mb-2">Status da Competição</h3>
          <Progress value={campaign.competition} className="h-2 mb-2" />
          <p className="text-sm text-gray-500">
            A competição está {campaign.competition}% concluída
          </p>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Influenciadores Participantes</h3>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center p-2 rounded-md border border-gray-200">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                  <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Influencer avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Influencer {i}</p>
                  <p className="text-xs text-gray-500">@influencer{i}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {Math.floor(Math.random() * 500)} engajamentos
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 ml-2" />
              </div>
            ))}
          </div>
          
          <Button variant="ghost" className="w-full mt-2 text-[#0071e3] hover:bg-blue-50 hover:text-[#0262c2]">
            Ver todos os influenciadores
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignsList;
