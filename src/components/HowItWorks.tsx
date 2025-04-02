
import React from "react";

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-gray-600 text-lg">
            Em apenas 3 passos simples, sua campanha já está no ar. Comece agora e veja seu restaurante crescer com influenciadores locais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="apple-card text-center opacity-0 animate-fade-in">
            <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-[#0071e3] text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Escolha seu plano</h3>
            <p className="text-gray-600">
              Selecione entre os planos Light, Premium ou Super Premium de acordo com suas necessidades e objetivos.
            </p>
          </div>
          
          <div className="apple-card text-center opacity-0 animate-fade-in animate-delay-1">
            <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-[#0071e3] text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Selecione influenciadores</h3>
            <p className="text-gray-600">
              Escolha os melhores influenciadores da nossa lista curada que se alinham com seu restaurante e público-alvo.
            </p>
          </div>
          
          <div className="apple-card text-center opacity-0 animate-fade-in animate-delay-2">
            <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-[#0071e3] text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Acompanhe resultados</h3>
            <p className="text-gray-600">
              Monitore o desempenho de cada campanha em tempo real, com métricas detalhadas e relatórios personalizados.
            </p>
          </div>
        </div>
        
        <div className="mt-20 bg-gray-50 rounded-2xl p-6 md:p-10 opacity-0 animate-fade-in animate-delay-3">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Gestão simplificada pelo WhatsApp ou WebApp</h3>
              <p className="text-gray-600 mb-6">
                Gerencie tudo pelo nosso WebApp intuitivo ou receba atualizações e gerencie suas campanhas via WhatsApp. 
                Você escolhe a forma que for mais conveniente.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Atualizações em tempo real das campanhas</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Notificações de novas postagens de influenciadores</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0071e3]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Suporte humano durante todo o processo</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white rounded-xl shadow-md p-4 md:absolute md:-right-6 md:-top-6">
                <img 
                  src="https://camo.githubusercontent.com/ad15a7b25a2e1ee3c60dc92cae7e328462db79e3a87121da76a9cec6e4bd1e24/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f5468656d65446978687461722f6e6578742d726f6f742d77697468737461696c77696e642d626f696c6572706c6174652f696d672f626c6f672d736563342d696d672e706e67" 
                  alt="WebApp interface"
                  className="rounded-lg"
                />
              </div>
              <div className="bg-white rounded-xl shadow-md p-3 md:absolute md:left-0 md:bottom-0">
                <img 
                  src="https://i.pinimg.com/originals/81/97/26/819726f54d36ef7ac4bc39e82b6751b3.png" 
                  alt="WhatsApp interface"
                  className="rounded-lg w-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
