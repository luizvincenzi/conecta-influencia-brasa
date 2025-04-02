
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

interface InfluencerSettingsProps {
  onClose: () => void;
}

const InfluencerSettings = ({ onClose }: InfluencerSettingsProps) => {
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
      <h2 className="text-xl font-semibold mb-6">Configurações do Influenciador</h2>
      
      <Tabs defaultValue="profile">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="profile" className="flex-1">Perfil</TabsTrigger>
          <TabsTrigger value="socials" className="flex-1">Redes Sociais</TabsTrigger>
          <TabsTrigger value="payments" className="flex-1">Pagamentos</TabsTrigger>
          <TabsTrigger value="security" className="flex-1">Segurança</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <form onSubmit={handleSave}>
            <div className="space-y-4">
              <div className="flex items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img src="https://i.pravatar.cc/150?img=5" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <Button variant="outline" size="sm" className="mb-2">
                    Alterar foto
                  </Button>
                  <p className="text-xs text-gray-500">
                    JPG, GIF ou PNG. Tamanho máximo de 2MB.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input id="fullName" defaultValue="Ana Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Nome de Usuário</Label>
                  <Input id="username" defaultValue="@anasilva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="ana.silva@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 98765-4321" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="location">Localização</Label>
                  <Input id="location" defaultValue="São Paulo, SP" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="bio">Biografia</Label>
                  <Textarea 
                    id="bio" 
                    rows={4}
                    defaultValue="Influenciadora de gastronomia e lifestyle. Apaixonada por descobrir novos restaurantes e experiências culinárias. Trabalho com marcas há mais de 5 anos criando conteúdo autêntico e engajador."
                  />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancelar
                </Button>
                <Button type="submit">Salvar Alterações</Button>
              </div>
            </div>
          </form>
        </TabsContent>
        
        <TabsContent value="socials">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">Conectar redes sociais</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded bg-gradient-to-tr from-purple-500 via-pink-600 to-orange-500 flex items-center justify-center mr-4">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Instagram</h4>
                      <p className="text-sm text-gray-500">@anasilva • Conectada</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Reautenticar</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded bg-black flex items-center justify-center mr-4">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></path>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                        <line x1="15" y1="3" x2="15" y2="21"></line>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="3" y1="15" x2="21" y2="15"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">TikTok</h4>
                      <p className="text-sm text-gray-500">@anasilva • Conectada</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Reautenticar</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded bg-blue-600 flex items-center justify-center mr-4">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Facebook</h4>
                      <p className="text-sm text-gray-500">Não conectada</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Conectar</Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Configurações de conteúdo</h3>
              <p className="text-sm text-gray-500 mb-4">
                Configure suas preferências para criação de conteúdo nas campanhas
              </p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="content-type">Tipo de conteúdo preferido</Label>
                  <select 
                    id="content-type" 
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="reels"
                  >
                    <option value="reels">Reels/TikToks</option>
                    <option value="stories">Stories</option>
                    <option value="posts">Posts no Feed</option>
                    <option value="mixed">Conteúdo Misto</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content-style">Estilo de conteúdo</Label>
                  <select 
                    id="content-style" 
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="authentic"
                  >
                    <option value="authentic">Autêntico/Dia a dia</option>
                    <option value="professional">Profissional/Produzido</option>
                    <option value="casual">Casual/Espontâneo</option>
                    <option value="tutorial">Tutorial/Educacional</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="button" onClick={() => {
                toast({
                  title: "Configurações salvas",
                  description: "Suas configurações de redes sociais foram atualizadas.",
                });
                onClose();
              }}>
                Salvar Alterações
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="payments">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">Dados bancários</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bank">Banco</Label>
                    <Input id="bank" defaultValue="Nubank" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agency">Agência</Label>
                    <Input id="agency" defaultValue="0001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account">Conta</Label>
                    <Input id="account" defaultValue="12345-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-type">Tipo de Conta</Label>
                    <select 
                      id="account-type" 
                      className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="checking"
                    >
                      <option value="checking">Conta Corrente</option>
                      <option value="savings">Conta Poupança</option>
                    </select>
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" defaultValue="123.456.789-00" />
                  </div>
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
                        Campanha
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">15/11/2023</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Lançamento Menu de Verão</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-right">R$ 850,00</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">28/10/2023</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Black Friday</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-right">R$ 1.100,00</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">05/10/2023</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Evento Especial</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-right">R$ 500,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="button" onClick={() => {
                toast({
                  title: "Dados bancários salvos",
                  description: "Seus dados bancários foram atualizados com sucesso.",
                });
                onClose();
              }}>
                Salvar Alterações
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
                Salvar Alterações
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InfluencerSettings;
