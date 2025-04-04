
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InfluencerRanking from "@/components/dashboard/InfluencerRanking";
import CampaignsList from "@/components/dashboard/CampaignsList";
import AIAgentsManager from "@/components/dashboard/AIAgentsManager";
import WhatsAppFlowManager from "@/components/dashboard/WhatsAppFlowManager";
import MetricsGrid from "@/components/dashboard/MetricsGrid";

interface DashboardTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  metricsData: {
    planInfo: {
      total: number;
      used: number;
    };
    conversionInfo: {
      total: number;
      trend: number;
    };
    roiInfo: {
      value: string;
      trend: string;
    };
    topInfluencer: {
      name: string;
      avatar: string;
      rating: number;
      reviews: number;
      engagement: string;
    };
  };
}

const DashboardTabs = ({ activeTab, setActiveTab, metricsData }: DashboardTabsProps) => {
  return (
    <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
      <TabsList className="mb-4">
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>
        <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
        <TabsTrigger value="influencers">Influenciadores</TabsTrigger>
        <TabsTrigger value="ai-communication">IA & Comunicação</TabsTrigger>
      </TabsList>
      
      {/* Overview Tab */}
      <TabsContent value="overview" className="space-y-8">
        {/* Metrics Section */}
        <MetricsGrid {...metricsData} />
        
        {/* Influencer Ranking */}
        <div className="mb-8">
          <InfluencerRanking />
        </div>
        
        {/* Campaigns List */}
        <div>
          <CampaignsList />
        </div>
      </TabsContent>
      
      {/* Campaigns Tab */}
      <TabsContent value="campaigns">
        <CampaignsList />
      </TabsContent>
      
      {/* Influencers Tab */}
      <TabsContent value="influencers">
        <InfluencerRanking />
      </TabsContent>
      
      {/* AI & Communication Tab */}
      <TabsContent value="ai-communication" className="space-y-8">
        <div className="grid grid-cols-1 gap-8">
          <AIAgentsManager />
          <WhatsAppFlowManager />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
