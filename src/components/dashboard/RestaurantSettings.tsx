
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import ProfileSettings from "./settings/ProfileSettings";
import NotificationSettings from "./settings/NotificationSettings";
import PaymentSettings from "./settings/PaymentSettings";
import SecuritySettings from "./settings/SecuritySettings";

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
        
        <TabsContent value="profile">
          <ProfileSettings onSave={handleSave} onCancel={onClose} />
        </TabsContent>
        
        <TabsContent value="notifications">
          <NotificationSettings onCancel={onClose} onClose={onClose} />
        </TabsContent>
        
        <TabsContent value="payments">
          <PaymentSettings onCancel={onClose} />
        </TabsContent>
        
        <TabsContent value="security">
          <SecuritySettings onCancel={onClose} onClose={onClose} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RestaurantSettings;
