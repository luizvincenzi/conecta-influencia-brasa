
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut, HelpCircle, Settings, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

  return (
    <div className="min-h-screen bg-white">
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
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="font-medium">
                  Restaurante Exemplo
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
        <h2 className="text-2xl font-bold mb-6">Central do Restaurante</h2>
        
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard 
            title="Plano Atual" 
            value="Premium" 
            description="8 influenciadores/mês"
            actionLabel="Ver Detalhes"
          />
          <MetricCard 
            title="Conversões Totais" 
            value="157" 
            description="Desde o início"
            actionLabel="Ver Detalhes"
          />
          <MetricCard 
            title="ROI" 
            value="210%" 
            description="Retorno sobre investimento"
            actionLabel="Ver Detalhes"
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
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-lg">
          <RestaurantSettings onClose={() => setShowSettings(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RestaurantDashboard;
