
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Camera, Smartphone, Mail, Globe, MapPin, Clock, Save, X } from "lucide-react";

interface RestaurantSettingsProps {
  onClose: () => void;
}

const RestaurantSettings = ({ onClose }: RestaurantSettingsProps) => {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Configurações salvas",
      description: "Suas configurações foram atualizadas com sucesso.",
    });
    onClose();
  };

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Configurações do Restaurante</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <Tabs defaultValue="profile">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="profile" className="flex-1">Perfil</TabsTrigger>
          <TabsTrigger value="notifications" className="flex-1">Notificações</TabsTrigger>
          <TabsTrigger value="payments" className="flex-1">Pagamentos</TabsTrigger>
          <TabsTrigger value="security" className="flex-1">Segurança</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <form onSubmit={handleSave}>
            <div className="space-y-4">
              <div className="flex items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mr-4 relative group">
                  <img src="https://i.pravatar.cc/150?img=20" alt="Profile" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <Button variant="outline" size="sm" className="mb-2">
                    <Camera className="h-4 w-4 mr-2" />
                    Alterar foto
                  </Button>
                  <p className="text-xs text-gray-500">
                    JPG, GIF ou PNG. Tamanho máximo de 2MB.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="restaurantName">Nome do Restaurante</Label>
                  <Input id="restaurantName" defaultValue="Restaurante Sabor Mineiro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Nome do Responsável</Label>
                  <Input id="ownerName" defaultValue="João Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex">
                    <Mail className="h-4 w-4 text-gray-500 mr-2 mt-2.5" />
                    <Input id="email" type="email" defaultValue="contato@sabormineirorestaurante.com.br" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <div className="flex">
                    <Smartphone className="h-4 w-4 text-gray-500 mr-2 mt-2.5" />
                    <Input id="phone" defaultValue="(11) 98765-4321" />
                  </div>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="location">Localização</Label>
                  <div className="flex">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-2.5" />
                    <Input id="location" defaultValue="Rua Exemplo, 123 - São Paulo, SP" />
                  </div>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="website">Website</Label>
                  <div className="flex">
                    <Globe className="h-4 w-4 text-gray-500 mr-2 mt-2.5" />
                    <Input id="website" defaultValue="https://sabormineirorestaurante.com.br" />
                  </div>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="hours">Horário de Funcionamento</Label>
                  <div className="flex">
                    <Clock className="h-4 w-4 text-gray-500 mr-2 mt-2.5" />
                    <Input id="hours" defaultValue="Seg-Sex: 11h às 23h | Sáb-Dom: 11h às 00h" />
                  </div>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea 
                    id="description" 
                    rows={4}
                    defaultValue="Restaurante especializado em culinária mineira autêntica, com ambiente aconchegante e atendimento personalizado. Fundado em 2015, temos como missão proporcionar experiências gastronômicas inesquecíveis com o melhor da cozinha de Minas Gerais."
                  />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancelar
                </Button>
                <Button type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </div>
          </form>
        </TabsContent>
        
        <TabsContent value="notifications">
          <div className="space-y-4">
            <h3 className="font-medium">Canais de notificação</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between py-2">
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-gray-500">Receber notificações por email</p>
                </div>
                <div className="form-switch">
                  <input type="checkbox" id="email-switch" className="sr-only" defaultChecked />
                  <label 
                    htmlFor="email-switch" 
                    className="block w-11 h-6 bg-gray-200 rounded-full cursor-pointer relative transition-colors duration-200 ease-in-out checked:bg-blue-600"
                  >
                    <span className="block w-5 h-5 bg-white rounded-full transform transition-transform duration-200 ease-in-out translate-x-1" />
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-sm text-gray-500">Receber notificações via WhatsApp</p>
                </div>
                <div className="form-switch">
                  <input type="checkbox" id="whatsapp-switch" className="sr-only" defaultChecked />
                  <label 
                    htmlFor="whatsapp-switch" 
                    className="block w-11 h-6 bg-gray-200 rounded-full cursor-pointer relative transition-colors duration-200 ease-in-out checked:bg-blue-600"
                  >
                    <span className="block w-5 h-5 bg-white rounded-full transform transition-transform duration-200 ease-in-out translate-x-1" />
                  </label>
                </div>
              </div>
            </div>
            
            <h3 className="font-medium mt-6">Tipos de notificação</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between py-2">
                <div>
                  <h4 className="font-medium">Novas campanhas</h4>
                  <p className="text-sm text-gray-500">Quando uma nova campanha for criada</p>
                </div>
                <div className="form-switch">
                  <input type="checkbox" id="campaign-switch" className="sr-only" defaultChecked />
                  <label 
                    htmlFor="campaign-switch" 
                    className="block w-11 h-6 bg-gray-200 rounded-full cursor-pointer relative transition-colors duration-200 ease-in-out checked:bg-blue-600"
                  >
                    <span className="block w-5 h-5 bg-white rounded-full transform transition-transform duration-200 ease-in-out translate-x-1" />
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div>
                  <h4 className="font-medium">Atualizações de campanhas</h4>
                  <p className="text-sm text-gray-500">Quando houver atualizações em campanhas existentes</p>
                </div>
                <div className="form-switch">
                  <input type="checkbox" id="update-switch" className="sr-only" defaultChecked />
                  <label 
                    htmlFor="update-switch" 
                    className="block w-11 h-6 bg-gray-200 rounded-full cursor-pointer relative transition-colors duration-200 ease-in-out checked:bg-blue-600"
                  >
                    <span className="block w-5 h-5 bg-white rounded-full transform transition-transform duration-200 ease-in-out translate-x-1" />
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div>
                  <h4 className="font-medium">Relatórios</h4>
                  <p className="text-sm text-gray-500">Relatórios semanais e de final de campanha</p>
                </div>
                <div className="form-switch">
                  <input type="checkbox" id="report-switch" className="sr-only" defaultChecked />
                  <label 
                    htmlFor="report-switch" 
                    className="block w-11 h-6 bg-gray-200 rounded-full cursor-pointer relative transition-colors duration-200 ease-in-out checked:bg-blue-600"
                  >
                    <span className="block w-5 h-5 bg-white rounded-full transform transition-transform duration-200 ease-in-out translate-x-1" />
                  </label>
                </div>
              </div>
            </div>
            
            <div className="pt-6 flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="button" onClick={() => {
                toast({
                  title: "Configurações salvas",
                  description: "Suas configurações de notificação foram atualizadas.",
                });
                onClose();
              }}>
                <Save className="h-4 w-4 mr-2" />
                Salvar Alterações
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="payments">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">Método de pagamento atual</h3>
              <div className="flex items-center p-3 border border-gray-200 rounded-md">
                <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center mr-3">
                  <svg viewBox="0 0 32 21" width="32" height="21" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <g fillRule="nonzero">
                        <rect fill="#252525" width="32" height="21" rx="3"/>
                        <path d="M18.545 7.176c0-.608.486-1.101 1.084-1.101.599 0 1.084.493 1.084 1.101 0 .608-.485 1.102-1.084 1.102-.598 0-1.084-.494-1.084-1.102zm-2.895 0c0-.608.486-1.101 1.084-1.101.598 0 1.084.493 1.084 1.101 0 .608-.486 1.102-1.084 1.102-.598 0-1.084-.494-1.084-1.102zm-2.896 0c0-.608.486-1.101 1.085-1.101.598 0 1.084.493 1.084 1.101 0 .608-.486 1.102-1.084 1.102-.599 0-1.085-.494-1.085-1.102zm8.688 1.95c-.599 0-1.085.494-1.085 1.102 0 .608.486 1.101 1.085 1.101.598 0 1.084-.493 1.084-1.101 0-.608-.486-1.102-1.084-1.102zm-2.896 0c-.598 0-1.084.494-1.084 1.102 0 .608.486 1.101 1.084 1.101.599 0 1.084-.493 1.084-1.101 0-.608-.485-1.102-1.084-1.102zm-2.896 0c-.598 0-1.084.494-1.084 1.102 0 .608.486 1.101 1.084 1.101.599 0 1.085-.493 1.085-1.101 0-.608-.486-1.102-1.085-1.102zm-2.895 0c-.598 0-1.084.494-1.084 1.102 0 .608.486 1.101 1.084 1.101.599 0 1.084-.493 1.084-1.101 0-.608-.485-1.102-1.084-1.102zm11.584 2.725c0-.608.486-1.102 1.084-1.102.599 0 1.084.494 1.084 1.102 0 .608-.485 1.101-1.084 1.101-.598 0-1.084-.493-1.084-1.101zm-2.895 0c0-.608.486-1.102 1.084-1.102.598 0 1.084.494 1.084 1.102 0 .608-.486 1.101-1.084 1.101-.598 0-1.084-.493-1.084-1.101zm-2.896 0c0-.608.486-1.102 1.085-1.102.598 0 1.084.494 1.084 1.102 0 .608-.486 1.101-1.084 1.101-.599 0-1.085-.493-1.085-1.101zm-2.895 0c0-.608.486-1.102 1.084-1.102.598 0 1.084.494 1.084 1.102 0 .608-.486 1.101-1.084 1.101-.598 0-1.084-.493-1.084-1.101zm-2.896 0c0-.608.486-1.102 1.084-1.102.599 0 1.084.494 1.084 1.102 0 .608-.485 1.101-1.084 1.101-.598 0-1.084-.493-1.084-1.101z" fill="#FFF"/>
                      </g>
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Mastercard terminando em 4321</p>
                  <p className="text-sm text-gray-500">Expira em 12/2025</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Histórico de pagamentos</h3>
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Descrição
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">01/12/2023</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Plano Premium - Dezembro 2023</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-right">R$ 3.560,00</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">01/11/2023</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Plano Premium - Novembro 2023</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-right">R$ 3.560,00</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">01/10/2023</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Plano Premium - Outubro 2023</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-right">R$ 3.560,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={onClose}>
                Fechar
              </Button>
              <Button type="button" onClick={() => {
                window.location.href = "https://wa.me/5511123456789?text=Olá,%20gostaria%20de%20atualizar%20meu%20método%20de%20pagamento";
              }}>
                Atualizar Método de Pagamento
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-medium">Alterar senha</h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="current-password">Senha atual</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new-password">Nova senha</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirm-password">Confirmar nova senha</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium">Autenticação de dois fatores</h3>
              <p className="text-sm text-gray-500">
                Adicione uma camada extra de segurança à sua conta, exigindo mais do que apenas uma senha para entrar.
              </p>
              <Button variant="outline">Ativar autenticação de dois fatores</Button>
            </div>
            
            <div className="pt-4 flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="button" onClick={() => {
                toast({
                  title: "Senha atualizada",
                  description: "Sua senha foi atualizada com sucesso.",
                });
                onClose();
              }}>
                <Save className="h-4 w-4 mr-2" />
                Salvar Alterações
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RestaurantSettings;
