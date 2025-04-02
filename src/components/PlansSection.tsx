
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PlansSection = () => {
  const handleContactClick = () => {
    window.location.href = "https://wa.me/5511123456789?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20plataforma%20conecta-influência";
  };

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha seu plano</h2>
          <p className="text-gray-600 text-lg">
            Temos opções que se adaptam a qualquer tamanho de negócio e objetivo de marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plano Light */}
          <div className="apple-card flex flex-col opacity-0 animate-fade-in">
            <div className="p-6 pb-0">
              <h3 className="text-xl font-semibold mb-2">Light</h3>
              <p className="text-gray-600 mb-6">Ideal para começar</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">R$2.080</span>
                <span className="text-gray-500 ml-2">/mês</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfeito para restaurantes que estão iniciando com marketing de influência.
              </p>
            </div>
            
            <div className="border-t border-gray-100 p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>4 influenciadores por mês</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Acesso ao WebApp</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Relatórios básicos</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Suporte via WhatsApp</p>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto p-6 pt-0">
              <Button 
                className="w-full bg-white hover:bg-gray-50 text-[#0071e3] font-medium border border-[#0071e3]"
                onClick={handleContactClick}
              >
                Fale com um especialista
              </Button>
            </div>
          </div>
          
          {/* Plano Premium */}
          <div className="apple-card flex flex-col relative border-2 border-[#0071e3] opacity-0 animate-fade-in animate-delay-1">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-[#0071e3] hover:bg-[#0071e3]">Mais Popular</Badge>
            </div>
            
            <div className="p-6 pb-0">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">Ideal para crescimento</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">R$3.560</span>
                <span className="text-gray-500 ml-2">/mês</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfeito para restaurantes que buscam expandir sua audiência e visibilidade.
              </p>
            </div>
            
            <div className="border-t border-gray-100 p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>8 influenciadores por mês</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Acesso ao WebApp</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Relatórios avançados</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Suporte prioritário</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Análise de ROI detalhada</p>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto p-6 pt-0">
              <Button 
                className="w-full apple-button bg-[#0071e3]"
                onClick={handleContactClick}
              >
                Fale com um especialista
              </Button>
            </div>
          </div>
          
          {/* Plano Super Premium */}
          <div className="apple-card flex flex-col opacity-0 animate-fade-in animate-delay-2">
            <div className="p-6 pb-0">
              <h3 className="text-xl font-semibold mb-2">Super Premium</h3>
              <p className="text-gray-600 mb-6">Máximo impacto</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">R$4.440</span>
                <span className="text-gray-500 ml-2">/mês</span>
              </div>
              <p className="text-gray-600 mb-6">
                Ideal para restaurantes que desejam dominar o marketing de influência local.
              </p>
            </div>
            
            <div className="border-t border-gray-100 p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>12 influenciadores por mês</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Acesso ao WebApp</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Relatórios premium</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Suporte VIP</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Análise de ROI detalhada</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Consultoria personalizada</p>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto p-6 pt-0">
              <Button 
                className="w-full bg-white hover:bg-gray-50 text-[#0071e3] font-medium border border-[#0071e3]"
                onClick={handleContactClick}
              >
                Fale com um especialista
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            *Todos os planos incluem gerenciamento completo de contratos, pagamentos e acompanhamento de campanhas.
            <br />
            Taxa mensal isenta para contratos acima de R$ 2.500.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
