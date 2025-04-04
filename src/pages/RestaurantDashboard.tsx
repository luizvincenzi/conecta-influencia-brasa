
import React, { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import SupportButton from "@/components/dashboard/SupportButton";
import SettingsDialog from "@/components/dashboard/SettingsDialog";

const RestaurantDashboard = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const handleSupport = () => {
    window.location.href = "https://wa.me/5511123456789?text=Olá,%20preciso%20de%20ajuda%20com%20a%20plataforma%20conecta-influência";
  };

  // Dashboard data
  const metricsData = {
    planInfo: {
      total: 8,
      used: 4
    },
    conversionInfo: {
      total: 124,
      trend: 12
    },
    roiInfo: {
      value: "3.2x",
      trend: "+0.4x"
    },
    topInfluencer: {
      name: "@gourmetpaulista",
      avatar: "https://i.pravatar.cc/150?img=11", 
      rating: 5.0,
      reviews: 24,
      engagement: "+1.2k"
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f3f1]">
      {/* Header/Navbar */}
      <DashboardHeader 
        title="conecta-influência | Restaurante" 
        onSettingsClick={() => setShowSettings(true)} 
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <WelcomeBanner 
          restaurantName="Restaurante Sabor Mineiro" 
          description="Aqui está o resumo da sua conta e campanhas" 
        />
        
        <DashboardTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          metricsData={metricsData} 
        />
      </main>
      
      {/* Floating Support Button */}
      <SupportButton onClick={handleSupport} />
      
      {/* Settings Dialog */}
      <SettingsDialog 
        isOpen={showSettings} 
        onOpenChange={setShowSettings} 
      />
    </div>
  );
};

export default RestaurantDashboard;
