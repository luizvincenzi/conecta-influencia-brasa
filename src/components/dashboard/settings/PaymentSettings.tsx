
import React from "react";
import { Button } from "@/components/ui/button";

interface PaymentSettingsProps {
  onCancel: () => void;
}

const PaymentSettings = ({ onCancel }: PaymentSettingsProps) => {
  const handleUpdatePayment = () => {
    window.location.href = "https://wa.me/5511123456789?text=Olá,%20gostaria%20de%20atualizar%20meu%20método%20de%20pagamento";
  };

  return (
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
        <Button type="button" variant="outline" onClick={onCancel}>
          Fechar
        </Button>
        <Button type="button" onClick={handleUpdatePayment}>
          Atualizar Método de Pagamento
        </Button>
      </div>
    </div>
  );
};

export default PaymentSettings;
