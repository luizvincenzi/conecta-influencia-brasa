
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  LogOut, 
  HelpCircle, 
  Settings, 
  MessageCircle, 
  Crown, 
  TrendingUp, 
  BarChart3, 
  Users 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import MetricCard from "@/components/dashboard/MetricCard";
import CampaignsList from "@/components/dashboard/CampaignsList";
import InfluencerRanking from "@/components/dashboard/InfluencerRanking";
import RestaurantSettings from "@/components/dashboard/RestaurantSettings";
import { toast } from "@/hooks/use-toast";

const RestaurantDashboard = () => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  const handleLogout = () => {
    toast({
      title: "Sessão encerrada",
      description: "Você foi desconectado com sucesso.",
    });
    navigate("/");
  };

  const handleSupport = () => {
    window.location.href = "https://wa.me/5511123456789?text=Olá,%20preciso%20de%20ajuda%20com%20a%20plataforma%20conecta-influência";
  };

  // Top influencer data
  const topInfluencer = {
    name: "@gourmetpaulista",
    avatar: "https://i.pravatar.cc/150?img=11", 
    rating: 5.0,
    reviews: 24,
    engagement: "+1.2k"
  };

  return (
    <div className="min-h-screen bg-[#f3f3f1]">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-semibold">conecta-influência | <span className="text-[#0071e3]">Restaurante</span></h1>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 apple-popup">
                <DropdownMenuItem className="font-medium">
                  Restaurante Sabor Mineiro 🍽️
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setShowSettings(true)}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSupport}>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Ajuda</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-2">Bem-vindo, Restaurante Sabor Mineiro! 👋</h2>
        <p className="text-gray-600 mb-6">Aqui está o resumo da sua conta e campanhas</p>
        
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MetricCard 
            title="Seu Plano" 
            value="Premium" 
            description="Influenciadores/mês"
            secondaryMetric={{
              value: "8",
              trend: "neutral",
              label: "Total disponível"
            }}
            actionLabel="Ver Detalhes"
            icon={Crown}
            iconColor="text-purple-600"
            iconBgColor="bg-purple-100"
            additionalContent={
              <div>
                <Progress value={50} className="h-2 my-2" />
                <p className="text-xs text-gray-500">4 utilizados este mês</p>
              </div>
            }
          />
          <MetricCard 
            title="Conversões" 
            value="124" 
            description="Últimos 30 dias"
            secondaryMetric={{
              value: "+12%",
              trend: "up",
              label: "vs último mês"
            }}
            actionLabel="Ver Detalhes"
            icon={BarChart3}
            iconColor="text-green-600"
            iconBgColor="bg-green-100"
          />
          <MetricCard 
            title="ROI" 
            value="3.2x" 
            description="Retorno sobre investimento"
            secondaryMetric={{
              value: "+0.4x",
              trend: "up",
              label: "vs último mês"
            }}
            actionLabel="Ver Detalhes"
            icon={TrendingUp}
            iconColor="text-blue-600"
            iconBgColor="bg-blue-100"
          />
          <MetricCard 
            title="Top Influenciador" 
            value={topInfluencer.name} 
            description={`${topInfluencer.engagement} engajamento`}
            actionLabel="Ver Perfil"
            icon={Users}
            iconColor="text-rose-600"
            iconBgColor="bg-rose-100"
            additionalContent={
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">⭐</span>
                ))}
                <span className="ml-2 text-sm text-gray-600">{topInfluencer.rating} ({topInfluencer.reviews} avaliações)</span>
              </div>
            }
          />
        </div>
        
        {/* Influencer Ranking */}
        <div className="mb-8">
          <InfluencerRanking />
        </div>
        
        {/* Campaigns List */}
        <div>
          <CampaignsList />
        </div>
      </main>
      
      {/* Floating Support Button */}
      <button 
        onClick={handleSupport}
        className="fixed bottom-6 right-6 bg-[#0071e3] text-white rounded-full p-3 shadow-lg hover:bg-[#0262c2] transition-colors"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      
      {/* Settings Dialog */}
      {showSettings && (
        <Dialog open={showSettings} onOpenChange={setShowSettings}>
          <DialogContent className="apple-dialog sm:max-w-lg p-0">
            <RestaurantSettings onClose={() => setShowSettings(false)} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default RestaurantDashboard;
