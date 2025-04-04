
import React from "react";
import { TrendingUp } from "lucide-react";
import { LeaderboardFullItem } from "./LeaderboardFullItem";
import { EXTENDED_LEADERBOARD } from "./leaderboardData";

export const LeaderboardFull = () => {
  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-2">Campeonato Paulista de Conteúdo</h2>
      <p className="text-gray-500 mb-6">
        Classificação atualizada dos melhores influenciadores da região.
        Os pontos são baseados no engajamento das postagens e resultados das campanhas.
      </p>
      
      <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2">
        {EXTENDED_LEADERBOARD.map((influencer) => (
          <LeaderboardFullItem 
            key={influencer.id}
            influencer={influencer}
          />
        ))}
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
        <h3 className="font-medium mb-2">Como funcionam os pontos</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Cada curtida vale 0.5 pontos</li>
          <li>• Cada comentário vale 2 pontos</li>
          <li>• Cada compartilhamento vale 3 pontos</li>
          <li>• Conversões rastreadas valem 10 pontos cada</li>
          <li>• Bônus de 50 pontos para o influenciador com melhor performance da campanha</li>
        </ul>
      </div>
    </div>
  );
};

export const LeaderboardDialog = () => {
  return <LeaderboardFull />;
};
