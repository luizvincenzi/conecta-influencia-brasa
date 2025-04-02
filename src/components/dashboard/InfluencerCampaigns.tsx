
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
import { Badge } from "@/components/ui/badge";
import { Calendar, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Sample data for the component
const CAMPAIGNS = [
  { 
    id: 1, 
    name: "Lançamento Menu de Verão", 
    restaurant: "Restaurante Mediterrâneo",
    status: "active", 
    startDate: "10/11/2023", 
    endDate: "10/12/2023", 
    contentType: "Reels + Stories",
    compensation: "R$ 850", 
    deliveryStatus: 70 
  },
  { 
    id: 2, 
    name: "Promoção de Fim de Semana", 
    restaurant: "Bistrô Central",
    status: "active", 
    startDate: "01/12/2023", 
    endDate: "15/12/2023", 
    contentType: "Post no Feed + Stories",
    compensation: "R$ 550", 
    deliveryStatus: 30 
  },
  { 
    id: 3, 
    name: "Black Friday", 
    restaurant: "Hamburgueria Artesanal",
    status: "completed", 
    startDate: "20/11/2023", 
    endDate: "27/11/2023", 
    contentType: "Reels + Post no Feed",
    compensation: "R$ 1.100", 
    deliveryStatus: 100 
  },
];

const InfluencerCampaigns = () => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Minhas Campanhas</CardTitle>
        </div>
        <CardDescription>Campanhas ativas e finalizadas</CardDescription>
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
                      <p className="text-sm text-gray-500">{campaign.restaurant}</p>
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
                      <span className="text-gray-500">Tipo de Conteúdo:</span>{" "}
                      <span className="font-medium">{campaign.contentType}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Pagamento:</span>{" "}
                      <span className="font-medium">{campaign.compensation}</span>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-500">Status de Entrega:</span>
                        <span className="text-sm font-medium">{campaign.deliveryStatus}%</span>
                      </div>
                      <Progress value={campaign.deliveryStatus} className="h-2" />
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
  restaurant: string;
  status: string;
  startDate: string;
  endDate: string;
  contentType: string;
  compensation: string;
  deliveryStatus: number;
}

const CampaignDetails = ({ campaign }: { campaign: Campaign }) => {
  const [rating, setRating] = React.useState(0);
  
  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold">{campaign.name}</h2>
      <Badge variant={campaign.status === "active" ? "default" : "secondary"} className="mt-2">
        {campaign.status === "active" ? "Ativa" : "Finalizada"}
      </Badge>
      
      <div className="mt-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm text-gray-500">Restaurante</h3>
            <p className="font-medium">{campaign.restaurant}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Pagamento</h3>
            <p className="font-medium">{campaign.compensation}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Data de Início</h3>
            <p className="font-medium">{campaign.startDate}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Data de Término</h3>
            <p className="font-medium">{campaign.endDate}</p>
          </div>
          <div className="col-span-2">
            <h3 className="text-sm text-gray-500">Tipo de Conteúdo</h3>
            <p className="font-medium">{campaign.contentType}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm text-gray-500 mb-2">Status de Entrega</h3>
          <Progress value={campaign.deliveryStatus} className="h-2 mb-2" />
          <p className="text-sm text-gray-500">
            {campaign.deliveryStatus === 100 
              ? "Todos os conteúdos foram entregues" 
              : `${campaign.deliveryStatus}% dos conteúdos foram entregues`}
          </p>
        </div>
        
        {campaign.status === "completed" && (
          <div>
            <h3 className="font-medium mb-2">Avalie sua experiência</h3>
            <p className="text-sm text-gray-500 mb-3">
              Como foi trabalhar com {campaign.restaurant}?
            </p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button 
                  key={star}
                  variant="ghost" 
                  size="sm"
                  onClick={() => setRating(star)} 
                  className="px-1"
                >
                  <Star className={`h-6 w-6 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                </Button>
              ))}
            </div>
            {rating > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium">Obrigado pela sua avaliação!</p>
                <p className="text-sm text-gray-500">
                  Sua avaliação ajuda a melhorar a experiência para todos os influenciadores.
                </p>
              </div>
            )}
          </div>
        )}
        
        {campaign.status === "active" && (
          <div className="space-y-3">
            <h3 className="font-medium">Próximos passos</h3>
            <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
              <h4 className="font-medium text-blue-700 mb-1">Entrega de conteúdo pendente</h4>
              <p className="text-sm text-blue-600">
                Você ainda precisa entregar alguns conteúdos para esta campanha. 
                Confira as instruções abaixo:
              </p>
              <ul className="text-sm text-blue-600 list-disc list-inside mt-2 space-y-1">
                <li>Postar 1 Reel até {campaign.endDate}</li>
                <li>Enviar relatório de desempenho após a postagem</li>
              </ul>
            </div>
            <Button className="w-full" onClick={() => {
              window.location.href = "https://wa.me/5511123456789?text=Olá,%20preciso%20de%20ajuda%20com%20a%20entrega%20de%20conteúdo%20para%20a%20campanha%20" + campaign.name;
            }}>
              Enviar Comprovante via WhatsApp
            </Button>
          </div>
        )}
        
        {campaign.status === "completed" && (
          <Button variant="outline" className="w-full" onClick={() => {
            window.location.href = "https://wa.me/5511123456789?text=Olá,%20gostaria%20de%20ver%20os%20resultados%20da%20campanha%20" + campaign.name;
          }}>
            Ver Relatório Completo
          </Button>
        )}
      </div>
    </div>
  );
};

export default InfluencerCampaigns;
