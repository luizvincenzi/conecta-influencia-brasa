
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

interface MetricDetailsProps {
  title: string;
}

const MetricDetails = ({ title }: MetricDetailsProps) => {
  // This is just sample data - in a real implementation this would come from an API
  const data = [
    { name: "Jan", value: 40 },
    { name: "Fev", value: 30 },
    { name: "Mar", value: 45 },
    { name: "Abr", value: 50 },
    { name: "Mai", value: 65 },
    { name: "Jun", value: 60 },
  ];

  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-4">Detalhes: {title}</h2>
      
      <div className="space-y-6">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#0071e3" radius={[4, 4, 0, 0]} />
            </BarChart>
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
      </div>
    </div>
  );
};

export default MetricDetails;
