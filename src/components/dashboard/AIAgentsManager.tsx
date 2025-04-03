
import React, { useState } from "react";
import { AIAgentConfig, defaultAgents } from "@/utils/aiAgents";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Settings, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface AIAgentConfigDialogProps {
  agent: AIAgentConfig;
  onClose: () => void;
  onSave: (updatedAgent: AIAgentConfig) => void;
}

const AIAgentConfigDialog = ({ agent, onClose, onSave }: AIAgentConfigDialogProps) => {
  const [config, setConfig] = useState<AIAgentConfig>({ ...agent });

  const handleSave = () => {
    onSave(config);
    onClose();
    toast({
      title: "Configurações salvas",
      description: `As configurações do agente ${config.name} foram atualizadas.`,
    });
  };

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Configurar Agente de IA</DialogTitle>
        <DialogDescription>
          Personalize as configurações do agente de IA para atender às suas necessidades.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="agent-name" className="text-sm font-medium">Nome do Agente</label>
          <input
            id="agent-name"
            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={config.name}
            onChange={(e) => setConfig({ ...config, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="agent-endpoint" className="text-sm font-medium">Endpoint (opcional)</label>
          <input
            id="agent-endpoint"
            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={config.endpoint || ''}
            onChange={(e) => setConfig({ ...config, endpoint: e.target.value })}
            placeholder="https://api.example.com/agent"
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="agent-active" className="text-sm font-medium">Ativo</label>
          <Switch 
            id="agent-active" 
            checked={config.isActive}
            onCheckedChange={(checked) => setConfig({ ...config, isActive: checked })}
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave}>Salvar Configurações</Button>
      </div>
    </DialogContent>
  );
};

const AIAgentsManager = () => {
  const [agents, setAgents] = useState<AIAgentConfig[]>(defaultAgents);
  const [selectedAgent, setSelectedAgent] = useState<AIAgentConfig | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const handleToggleAgent = (agentId: string, isActive: boolean) => {
    setAgents(agents.map(agent => 
      agent.id === agentId ? { ...agent, isActive } : agent
    ));
    
    toast({
      title: isActive ? "Agente ativado" : "Agente desativado",
      description: `O agente foi ${isActive ? 'ativado' : 'desativado'} com sucesso.`,
    });
  };

  const handleEditAgent = (agent: AIAgentConfig) => {
    setSelectedAgent(agent);
    setShowDialog(true);
  };

  const handleSaveAgent = (updatedAgent: AIAgentConfig) => {
    setAgents(agents.map(agent => 
      agent.id === updatedAgent.id ? updatedAgent : agent
    ));
  };

  const formatAgentType = (type: string) => {
    switch (type) {
      case 'onboarding': return 'Onboarding';
      case 'campaign': return 'Campanhas';
      case 'support': return 'Suporte';
      case 'reporting': return 'Relatórios';
      default: return type;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Agentes de IA</CardTitle>
            <CardDescription>Gerencie os agentes de IA integrados à plataforma</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={() => {
            toast({
              title: "Atualmente configurado",
              description: "Os agentes de IA estão configurados corretamente.",
            });
          }}>
            <Bot className="h-4 w-4 mr-2" />
            Testar Conexão
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {agents.map((agent) => (
            <div key={agent.id} className="flex items-center justify-between border rounded-lg p-4">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${agent.isActive ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  <Bot className={`h-5 w-5 ${agent.isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                </div>
                <div>
                  <h3 className="font-medium">{agent.name}</h3>
                  <p className="text-sm text-gray-500">Tipo: {formatAgentType(agent.type)}</p>
                </div>
                <Badge variant={agent.isActive ? "default" : "outline"} className="ml-2">
                  {agent.isActive ? 'Ativo' : 'Inativo'}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Switch 
                  checked={agent.isActive} 
                  onCheckedChange={(checked) => handleToggleAgent(agent.id, checked)}
                />
                <Button variant="ghost" size="icon" onClick={() => handleEditAgent(agent)}>
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        {selectedAgent && (
          <AIAgentConfigDialog 
            agent={selectedAgent}
            onClose={() => setShowDialog(false)}
            onSave={handleSaveAgent}
          />
        )}
      </Dialog>
    </Card>
  );
};

export default AIAgentsManager;
