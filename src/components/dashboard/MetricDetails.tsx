
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, Legend, Area, AreaChart } from "recharts";
import { Trophy, TrendingUp, BarChart3, Users, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MetricDetailsProps {
  title: string;
}

const MetricDetails = ({ title }: MetricDetailsProps) => {
  // Dados específicos com base no título
  let data = [];
  let chartType = "bar";
  let icon: React.ReactNode = null;
  let detailsTitle = title;
  let description = "";

  if (title === "Seu Plano" || title === "Plano Atual") {
    data = [
      { name: "Jan", value: 4, expected: 8 },
      { name: "Fev", value: 5, expected: 8 },
      { name: "Mar", value: 6, expected: 8 },
      { name: "Abr", value: 8, expected: 8 },
      { name: "Mai", value: 7, expected: 8 },
      { name: "Jun", value: 4, expected: 8 },
    ];
    icon = <Crown className="h-6 w-6 text-purple-600 mr-2" />;
    description = "Utilização mensal do seu plano Premium com limite de 8 influenciadores por mês.";
  } else if (title === "Conversões" || title === "Conversões Totais") {
    data = [
      { name: "Jan", value: 78 },
      { name: "Fev", value: 92 },
      { name: "Mar", value: 105 },
      { name: "Abr", value: 110 },
      { name: "Mai", value: 115 },
      { name: "Jun", value: 124 },
    ];
    chartType = "area";
    icon = <BarChart3 className="h-6 w-6 text-green-600 mr-2" />;
    description = "Todas as conversões geradas pelos influenciadores nas campanhas ativas.";
  } else if (title === "ROI") {
    data = [
      { name: "Jan", value: 2.1 },
      { name: "Fev", value: 2.3 },
      { name: "Mar", value: 2.5 },
      { name: "Abr", value: 2.7 },
      { name: "Mai", value: 2.9 },
      { name: "Jun", value: 3.2 },
    ];
    chartType = "line";
    icon = <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />;
    description = "Retorno sobre investimento mensurando quanto você recebe para cada R$ 1,00 investido.";
  } else if (title === "Top Influenciador") {
    data = [
      { name: "Mar", value: 35 },
      { name: "Abr", value: 38 },
      { name: "Mai", value: 40 },
      { name: "Jun", value: 42 },
    ];
    icon = <Trophy className="h-6 w-6 text-yellow-500 mr-2" />;
    detailsTitle = "@gourmetpaulista";
    description = "Histórico de conversões do seu melhor influenciador nos últimos meses.";
  }

  return (
    <div className="py-4">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold">{detailsTitle}</h2>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-6">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "bar" ? (
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Utilizado" fill="#0071e3" radius={[4, 4, 0, 0]} />
                {title === "Seu Plano" && (
                  <Bar dataKey="expected" name="Disponível" fill="#e0e0e0" radius={[4, 4, 0, 0]} />
                )}
              </BarChart>
            ) : chartType === "line" ? (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0071e3" 
                  activeDot={{ r: 8 }} 
                  strokeWidth={2}
                />
              </LineChart>
            ) : (
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0071e3" 
                  fill="#e6f0ff" 
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Análise</h3>
          <p className="text-gray-600">
            Os dados mostram um crescimento constante ao longo dos últimos meses, com um aumento
            significativo de 30% em maio. Essa tendência positiva indica que suas estratégias
            estão funcionando bem.
          </p>
          <p className="text-gray-600">
            Recomendamos continuar com as campanhas atuais e considerar expandir para novos 
            influenciadores com perfis semelhantes para maximizar os resultados.
          </p>
        </div>
        
        {title === "Top Influenciador" && (
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <h3 className="text-lg font-medium flex items-center">
              <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
              Principais conquistas
            </h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start">
                <Badge variant="gold" className="mt-0.5 mr-2">
                  <Crown className="h-3 w-3 mr-1" />
                  Ouro
                </Badge>
                <span>Maior número de conversões por campanha (42)</span>
              </li>
              <li className="flex items-start">
                <Badge variant="success" className="mt-0.5 mr-2">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12%
                </Badge>
                <span>Acima da média de engajamento da categoria</span>
              </li>
              <li className="flex items-start">
                <Badge className="mt-0.5 mr-2">5.0 ⭐</Badge>
                <span>Melhor avaliação entre todos os influenciadores</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricDetails;
