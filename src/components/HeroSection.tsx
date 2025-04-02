
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleContactClick = () => {
    window.location.href = "https://wa.me/5511123456789?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20plataforma%20conecta-influência";
  };

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6 max-w-2xl opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Eleve o Marketing do Seu Restaurante com Influenciadores Locais
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Conecte-se a influenciadores, impulsione engajamento autêntico e veja resultados reais—tudo em uma plataforma fácil de usar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="apple-button" onClick={handleContactClick}>
                Converse com um especialista
              </Button>
              <Button variant="outline" className="border-gray-300">
                Saiba mais
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">R</div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs">J</div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-xs">M</div>
              </div>
              <p className="text-gray-600">
                <span className="font-medium">+ 150 restaurantes</span> já estão crescendo com a conecta-influência
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative opacity-0 animate-fade-in animate-delay-2">
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg relative">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Restaurante movimentado com clientes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60" 
                      alt="Perfil de influenciador"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Ana Oliveira</h3>
                    <p className="text-sm text-gray-600">Influenciadora gastronômica • 45K seguidores</p>
                  </div>
                </div>
                <div className="mt-3 text-sm text-gray-700">
                  "O restaurante La Tavola tem o melhor carbonara de São Paulo! Vale super a visita 😍🍝 #LarixExperience #AdLeader"
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <span>❤️</span> 2.4K
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <span>💬</span> 156
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <span>🔄</span> 73
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-md opacity-0 animate-slide-up animate-delay-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center bg-green-50 rounded-full text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">+35% em reservas</p>
                  <p className="text-xs text-gray-500">nos últimos 30 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in animate-delay-3">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0071e3]">150+</h3>
            <p className="text-gray-600 mt-1">Restaurantes</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0071e3]">450+</h3>
            <p className="text-gray-600 mt-1">Influenciadores</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0071e3]">2.5M+</h3>
            <p className="text-gray-600 mt-1">Engajamentos</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0071e3]">35%</h3>
            <p className="text-gray-600 mt-1">+ Reservas em média</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
