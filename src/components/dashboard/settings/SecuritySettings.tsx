
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface SecuritySettingsProps {
  onCancel: () => void;
  onClose: () => void;
}

const SecuritySettings = ({ onCancel, onClose }: SecuritySettingsProps) => {
  const handleSave = () => {
    toast({
      title: "Senha atualizada",
      description: "Sua senha foi atualizada com sucesso.",
    });
    onClose();
  };

  return (
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

export default SecuritySettings;
