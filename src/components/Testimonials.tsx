
import React from "react";

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos</h2>
          <p className="text-gray-600 text-lg">
            Veja o que nossos clientes estão dizendo sobre os resultados que obtiveram.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="apple-card opacity-0 animate-fade-in">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Dobramos nossas reservas de fim de semana! O sistema é super intuitivo e a qualidade dos influenciadores é excelente. Vale cada centavo."
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60" 
                      alt="Cliente"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">João Oliveira</h4>
                    <p className="text-sm text-gray-500">Bistrô do Zé, São Paulo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="apple-card opacity-0 animate-fade-in animate-delay-1">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Simples, rápido e os resultados apareceram logo. Gostei muito da possibilidade de acompanhar tudo pelo WhatsApp, facilitou bastante o meu dia a dia."
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60" 
                      alt="Cliente"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Ana Soares</h4>
                    <p className="text-sm text-gray-500">Restaurante da Esquina, Recife</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="apple-card opacity-0 animate-fade-in animate-delay-2">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Estou impressionado com a qualidade dos influenciadores. A plataforma conectou meu restaurante com pessoas que realmente entendem nossa proposta. Nossas mídias sociais nunca estiveram tão ativas."
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbiUyMGluJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60" 
                      alt="Cliente"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Carlos Silva</h4>
                    <p className="text-sm text-gray-500">La Tavola, Belo Horizonte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 opacity-0 animate-fade-in animate-delay-3">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Aumento real de vendas e reservas</h3>
              <p className="text-gray-600 mb-6">
                Nossos clientes têm experimentado um aumento médio de 35% em reservas após 3 meses usando a plataforma conecta-influência.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[#0071e3]">35%</div>
                  <div className="text-sm text-gray-500">Mais reservas</div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[#0071e3]">42%</div>
                  <div className="text-sm text-gray-500">Mais seguidores</div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[#0071e3]">28%</div>
                  <div className="text-sm text-gray-500">Mais vendas</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnQlMjBjcm93ZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="Restaurante lotado"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
