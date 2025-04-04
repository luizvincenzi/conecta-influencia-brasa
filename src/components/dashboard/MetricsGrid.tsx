
import React from "react";
import { 
  Crown, 
  BarChart3, 
  TrendingUp, 
  Users
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import MetricCard from "@/components/dashboard/MetricCard";

interface MetricsGridProps {
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
}

const MetricsGrid = ({ planInfo, conversionInfo, roiInfo, topInfluencer }: MetricsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <MetricCard 
        title="Seu Plano" 
        value="Premium" 
        description="Influenciadores/mês"
        secondaryMetric={{
          value: planInfo.total.toString(),
          trend: "neutral",
          label: "Total disponível"
        }}
        actionLabel="Ver Detalhes"
        icon={Crown}
        iconColor="text-purple-600"
        iconBgColor="bg-purple-100"
        additionalContent={
          <div>
            <Progress value={(planInfo.used / planInfo.total) * 100} className="h-2 my-2" />
            <p className="text-xs text-gray-500">{planInfo.used} utilizados este mês</p>
          </div>
        }
      />
      <MetricCard 
        title="Conversões" 
        value={conversionInfo.total.toString()} 
        description="Últimos 30 dias"
        secondaryMetric={{
          value: `+${conversionInfo.trend}%`,
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
        value={roiInfo.value} 
        description="Retorno sobre investimento"
        secondaryMetric={{
          value: roiInfo.trend,
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
  );
};

export default MetricsGrid;
