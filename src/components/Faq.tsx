
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 text-lg">
            Encontre respostas para as perguntas mais comuns sobre nossa plataforma.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="apple-card mb-4 opacity-0 animate-fade-in">
              <AccordionTrigger className="text-left">
                Como sei se os influenciadores são certos para meu restaurante?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Nossa curadoria de influenciadores é baseada em dados e alinhamento de marca. Analisamos o perfil do seu restaurante e selecionamos influenciadores que combinam com sua proposta e público-alvo. Você também tem a palavra final na aprovação dos influenciadores sugeridos.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="apple-card mb-4 opacity-0 animate-fade-in animate-delay-1">
              <AccordionTrigger className="text-left">
                E se eu não estiver satisfeito com os resultados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Oferecemos suporte contínuo e ajustes em todas as campanhas. Se você não estiver satisfeito com o desempenho de um influenciador, podemos substituí-lo em sua próxima campanha. Nosso objetivo é seu sucesso, e trabalhamos constantemente para refinar nossa abordagem com base no seu feedback.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="apple-card mb-4 opacity-0 animate-fade-in animate-delay-2">
              <AccordionTrigger className="text-left">
                Quanto tempo leva para ver resultados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                A maioria dos nossos clientes começa a ver um aumento em engajamento e tráfego nas redes sociais imediatamente após o início das postagens. Em termos de reservas e vendas, muitos restaurantes notam um aumento nas primeiras 2-4 semanas. Resultados mais significativos geralmente são vistos após 3 meses de campanhas consistentes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="apple-card mb-4 opacity-0 animate-fade-in animate-delay-3">
              <AccordionTrigger className="text-left">
                Como funciona o processo de pagamento dos planos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                O pagamento é feito mensalmente, com opções de cartão de crédito ou boleto bancário. Não há taxas de adesão ou cancelamento, e você pode mudar de plano a qualquer momento. Para contratos acima de R$ 2.500, a taxa mensal de gerenciamento é isenta.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="apple-card opacity-0 animate-fade-in animate-delay-4">
              <AccordionTrigger className="text-left">
                Preciso fornecer algo aos influenciadores?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Sim, você precisará oferecer uma experiência gratuita ou com desconto para os influenciadores. Isso pode incluir uma refeição completa para o influenciador e um acompanhante. Esta é uma prática padrão no marketing de influência e permite que eles criem conteúdo autêntico sobre seu restaurante. Nós cuidamos de toda a coordenação e gerenciamento deste processo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
