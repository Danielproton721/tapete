export function DescriptionSection() {
  return (
    <section className="mt-10 border-t border-[#eee] pt-8">
      <h2 className="text-center text-xl font-bold text-[#222] mb-8">
        Descricao
      </h2>

      <div className="max-w-3xl mx-auto space-y-6 text-[#444] text-[15px] leading-relaxed">
        <p className="font-bold text-[#222]">
          Renove o visual do seu carro e mantenha seus bancos conservados por anos.
        </p>

        <p>
          Se voce gosta do seu carro bem cuidado, confortavel e com visual de carro novo, sabe como bancos desgastados, sujos ou manchados tiram totalmente a graca do interior.
        </p>

        <p>
          As Capas de Banco Premium com Design em Diamante foram desenvolvidas exatamente para resolver esse problema.
        </p>

        <p>
          Alem da estetica, a estrutura foi pensada para funcionar de verdade no uso diario. O material impermeavel protege contra agua, suor, lama e pequenos acidentes, evitando manchas e odores.
        </p>

        <p>
          Ja o design perfurado em diamante garante melhor circulacao de ar, mantendo conforto termico e compatibilidade total com bancos aquecidos e ventilados.
        </p>

        <p>
          Se voce quer valorizar o interior do seu carro, dirigir com mais conforto e proteger seus bancos por muito mais tempo, essa e a escolha certa.
        </p>

        <hr className="my-8 border-[#eee]" />

        {/* Material e Estrutura */}
        <h3 className="font-bold text-[#222] text-lg">Material e Estrutura - 5 Camadas</h3>
        <p>As capas contam com estrutura reforcada em 5 camadas acolchoadas resistentes a agua:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Couro sintetico impermeavel (eco-leather)</li>
          <li>Espuma de alta resiliencia</li>
          <li>Tecido nao tecido confortavel</li>
          <li>Espuma de retorno elastico</li>
          <li>Tecido base antiderrapante em silicone</li>
        </ul>
        <p>Essa combinacao garante conforto, durabilidade, protecao e estabilidade no uso diario.</p>

        {/* Protecao e Seguranca */}
        <h3 className="font-bold text-[#222] text-lg mt-6">Protecao e Seguranca</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Material resistente a liquidos, sujeira e pequenos riscos</li>
          <li>Tecnologia antiderrapante que evita deslocamentos</li>
          <li>Compativel com airbags laterais</li>
          <li>Ideal para uso com criancas e pets</li>
          <li>Seguranca preservada sem comprometer funcoes do carro</li>
        </ul>

        {/* Instalacao */}
        <h3 className="font-bold text-[#222] text-lg mt-6">Instalacao</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sistema de fecho com fivela dupla</li>
          <li>Encaixe rapido e seguro</li>
          <li>Instalacao facil, sem ferramentas</li>
          <li>Nao e eletrica</li>
          <li>Nao requer montagem complexa</li>
        </ul>

        {/* Conteudo da Embalagem */}
        <h3 className="font-bold text-[#222] text-lg mt-6">Conteudo da Embalagem</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Capas para bancos dianteiros (motorista e passageiro)</li>
          <li>Capa completa para banco traseiro</li>
          <li>Capas para encostos de cabeca</li>
          <li>Sistema completo de fixacao com fivelas</li>
          <li>Kit de ajuste e fixacao</li>
          <li>Manual de instalacao</li>
        </ul>

        {/* Video CTA */}
        <div className="mt-10 rounded-xl bg-[#f5f5f5] p-6 text-center">
          <h3 className="font-bold text-[#222] text-lg mb-2">
            Aperte o Play e garanta 10% de Desconto - Somente Hoje!
          </h3>
        </div>
      </div>
    </section>
  );
}
