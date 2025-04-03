
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Smartphone, Mail, Globe, MapPin, Clock, Save } from "lucide-react";

interface ProfileSettingsProps {
  onSave: (e: React.FormEvent) => void;
  onCancel: () => void;
}

const ProfileSettings = ({ onSave, onCancel }: ProfileSettingsProps) => {
  return (
    <form onSubmit={onSave}>
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
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">
            <Save className="h-4 w-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProfileSettings;
