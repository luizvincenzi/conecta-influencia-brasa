
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MessageSquare, CheckCircle, User, Store, Calendar, AlertCircle, BarChart3 } from "lucide-react";
import { AIAgentType, generateWhatsAppMessage } from "@/utils/aiAgents";
import { toast } from "@/hooks/use-toast";

interface FlowStep {
  id: string;
  title: string;
  description: string;
  messageTemplate: string;
  agentType: AIAgentType;
  triggerEvent?: string;
}

const restaurantFlow: FlowStep[] = [
  {
    id: "signup",
    title: "Cadastro Inicial",
    description: "Mensagem enviada quando o restaurante se cadastra na plataforma",
    messageTemplate: "Olá {name}! Bem-vindo ao conecta-influência. Estamos animados para ajudar seu restaurante a crescer com influenciadores locais. Podemos agendar seu onboarding para {date}?",
    agentType: "onboarding",
    triggerEvent: "signup_completed"
  },
  {
    id: "onboarding",
    title: "Agendamento de Onboarding",
    description: "Confirmação da reunião de onboarding técnico",
    messageTemplate: "Olá {name}! Sua reunião de onboarding está confirmada para {date} às {time}. Nosso time vai ajudar com toda a configuração da sua conta. Alguma dúvida até lá?",
    agentType: "onboarding",
    triggerEvent: "onboarding_scheduled"
  },
  {
    id: "plan_selection",
    title: "Seleção de Plano",
    description: "Confirmação do plano escolhido pelo restaurante",
    messageTemplate: "Ótimo, {name}! Você escolheu o plano {plan} com {influencers} influenciadores por mês. Sua primeira campanha já está sendo configurada.",
    agentType: "campaign",
    triggerEvent: "plan_selected"
  },
  {
    id: "campaign_update",
    title: "Atualização de Campanha",
    description: "Notificação sobre mudanças no status da campanha",
    messageTemplate: "Atualização da campanha \"{campaignName}\": {status}. Acesse sua dashboard para mais detalhes.",
    agentType: "campaign",
    triggerEvent: "campaign_status_changed"
  },
  {
    id: "campaign_completed",
    title: "Campanha Finalizada",
    description: "Notificação quando uma campanha é concluída",
    messageTemplate: "Sua campanha \"{campaignName}\" foi finalizada! Agora você pode avaliar o desempenho dos influenciadores e acessar o relatório completo na plataforma.",
    agentType: "reporting",
    triggerEvent: "campaign_completed"
  },
];

const influencerFlow: FlowStep[] = [
  {
    id: "signup",
    title: "Cadastro Inicial",
    description: "Mensagem enviada quando o influenciador se cadastra na plataforma",
    messageTemplate: "Olá {name}! Bem-vindo ao conecta-influência. Estamos animados para conectar você com os melhores restaurantes da sua região. Podemos agendar seu onboarding para {date}?",
    agentType: "onboarding",
    triggerEvent: "signup_completed"
  },
  {
    id: "onboarding",
    title: "Agendamento de Onboarding",
    description: "Confirmação da reunião de onboarding técnico",
    messageTemplate: "Olá {name}! Sua reunião de onboarding está confirmada para {date} às {time}. Nosso time vai ajudar com a configuração do seu perfil e integração das suas redes sociais. Alguma dúvida até lá?",
    agentType: "onboarding",
    triggerEvent: "onboarding_scheduled"
  },
  {
    id: "new_campaign",
    title: "Nova Campanha Disponível",
    description: "Notificação sobre novas campanhas na região",
    messageTemplate: "Nova oportunidade! O restaurante \"{restaurantName}\" está com uma campanha disponível em sua região. Veja os detalhes na plataforma.",
    agentType: "campaign",
    triggerEvent: "new_campaign_available"
  },
  {
    id: "campaign_instructions",
    title: "Instruções da Campanha",
    description: "Detalhes sobre como participar de uma campanha",
    messageTemplate: "Você foi selecionado para a campanha \"{campaignName}\"! Aqui estão as instruções: {instructions}. O prazo para entrega do conteúdo é {deadline}.",
    agentType: "campaign",
    triggerEvent: "campaign_accepted"
  },
  {
    id: "campaign_completed",
    title: "Campanha Finalizada",
    description: "Notificação quando uma campanha é concluída",
    messageTemplate: "Sua participação na campanha \"{campaignName}\" foi finalizada! Agora você pode avaliar a experiência com o restaurante e ver seu desempenho no ranking da plataforma.",
    agentType: "reporting",
    triggerEvent: "campaign_completed"
  },
];

const WhatsAppFlowManager = () => {
  const [selectedTab, setSelectedTab] = useState<"restaurant" | "influencer">("restaurant");
  const [selectedStep, setSelectedStep] = useState<FlowStep | null>(null);
  const [previewContext, setPreviewContext] = useState<Record<string, string>>({
    name: "João Silva",
    date: "15/04/2025",
    time: "14:00",
    plan: "Standard",
    influencers: "5",
    campaignName: "Verão 2025",
    status: "Novo influenciador adicionado",
    restaurantName: "Sabor Brasileiro",
    instructions: "Criar 1 Reel e 2 Stories destacando nosso prato especial",
    deadline: "25/04/2025"
  });

  const [editedTemplate, setEditedTemplate] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const currentFlow = selectedTab === "restaurant" ? restaurantFlow : influencerFlow;

  const handleSelectStep = (step: FlowStep) => {
    setSelectedStep(step);
    setEditedTemplate(step.messageTemplate);
    setShowPreview(true);
  };

  const handleSaveTemplate = () => {
    if (!selectedStep) return;
    
    // In a real application, you would save this template to your database
    // For this demo, we'll just show a success message
    toast({
      title: "Template salvo",
      description: "O template de mensagem foi atualizado com sucesso.",
    });
  };

  const handleTestMessage = () => {
    if (!selectedStep) return;
    
    // In a real application, you would send a test message to a specified number
    // For this demo, we'll just show a success message
    toast({
      title: "Mensagem de teste enviada",
      description: "A mensagem de teste foi enviada para o número configurado.",
    });
  };

  const replaceTemplateVariables = (template: string, context: Record<string, string>) => {
    let result = template;
    for (const [key, value] of Object.entries(context)) {
      result = result.replace(new RegExp(`{${key}}`, 'g'), value);
    }
    return result;
  };

  const getStepIcon = (step: FlowStep) => {
    switch (step.agentType) {
      case "onboarding": return <User className="h-5 w-5 text-blue-600" />;
      case "campaign": return <Store className="h-5 w-5 text-green-600" />;
      case "support": return <AlertCircle className="h-5 w-5 text-purple-600" />;
      case "reporting": return <BarChart3 className="h-5 w-5 text-orange-600" />;
      default: return <MessageSquare className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fluxo de Comunicação WhatsApp</CardTitle>
        <CardDescription>Gerencie as mensagens e fluxos de conversa automatizados para restaurantes e influenciadores</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedTab} onValueChange={(value) => setSelectedTab(value as "restaurant" | "influencer")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="restaurant">Restaurantes</TabsTrigger>
            <TabsTrigger value="influencer">Influenciadores</TabsTrigger>
          </TabsList>
          
          <TabsContent value="restaurant" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Etapas do Fluxo</h3>
                {restaurantFlow.map((step) => (
                  <div 
                    key={step.id}
                    className={`flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${selectedStep?.id === step.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                    onClick={() => handleSelectStep(step)}
                  >
                    <div className="p-2 rounded-full bg-gray-100 mr-3">
                      {getStepIcon(step)}
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.description}</p>
                      {step.triggerEvent && (
                        <div className="mt-1">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Evento: {step.triggerEvent}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {showPreview && selectedStep && (
                <div className="space-y-4">
                  <h3 className="font-medium">Configuração da Mensagem</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Template da Mensagem</label>
                      <textarea 
                        rows={5}
                        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
                        value={editedTemplate}
                        onChange={(e) => setEditedTemplate(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block">Variáveis Disponíveis</label>
                      <div className="flex flex-wrap gap-2">
                        {Object.keys(previewContext).map((key) => (
                          <span 
                            key={key}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full cursor-pointer hover:bg-blue-200"
                            onClick={() => setEditedTemplate(editedTemplate + `{${key}}`)}
                          >
                            {key}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <h4 className="text-sm font-medium mb-2">Pré-visualização</h4>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-2">
                          <div className="p-2 bg-[#25D366] rounded-full">
                            <MessageSquare className="h-4 w-4 text-white" />
                          </div>
                          <div className="max-w-[80%] bg-white p-3 rounded-lg shadow-sm">
                            {replaceTemplateVariables(editedTemplate, previewContext)}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 justify-end">
                      <Button variant="outline" onClick={handleTestMessage}>
                        Enviar Teste
                      </Button>
                      <Button onClick={handleSaveTemplate}>
                        Salvar Template
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="influencer" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Etapas do Fluxo</h3>
                {influencerFlow.map((step) => (
                  <div 
                    key={step.id}
                    className={`flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${selectedStep?.id === step.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                    onClick={() => handleSelectStep(step)}
                  >
                    <div className="p-2 rounded-full bg-gray-100 mr-3">
                      {getStepIcon(step)}
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.description}</p>
                      {step.triggerEvent && (
                        <div className="mt-1">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Evento: {step.triggerEvent}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {showPreview && selectedStep && (
                <div className="space-y-4">
                  <h3 className="font-medium">Configuração da Mensagem</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Template da Mensagem</label>
                      <textarea 
                        rows={5}
                        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
                        value={editedTemplate}
                        onChange={(e) => setEditedTemplate(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block">Variáveis Disponíveis</label>
                      <div className="flex flex-wrap gap-2">
                        {Object.keys(previewContext).map((key) => (
                          <span 
                            key={key}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full cursor-pointer hover:bg-blue-200"
                            onClick={() => setEditedTemplate(editedTemplate + `{${key}}`)}
                          >
                            {key}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <h4 className="text-sm font-medium mb-2">Pré-visualização</h4>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-2">
                          <div className="p-2 bg-[#25D366] rounded-full">
                            <MessageSquare className="h-4 w-4 text-white" />
                          </div>
                          <div className="max-w-[80%] bg-white p-3 rounded-lg shadow-sm">
                            {replaceTemplateVariables(editedTemplate, previewContext)}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 justify-end">
                      <Button variant="outline" onClick={handleTestMessage}>
                        Enviar Teste
                      </Button>
                      <Button onClick={handleSaveTemplate}>
                        Salvar Template
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WhatsAppFlowManager;
