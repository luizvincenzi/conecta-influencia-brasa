
import React from "react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface NotificationSettingsProps {
  onCancel: () => void;
  onClose: () => void;
}

const NotificationSettings = ({ onCancel, onClose }: NotificationSettingsProps) => {
  const handleSave = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas configurações de notificação foram atualizadas.",
    });
    onClose();
  };

  return (
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
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="button" onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>
    </div>
  );
};

export default NotificationSettings;
