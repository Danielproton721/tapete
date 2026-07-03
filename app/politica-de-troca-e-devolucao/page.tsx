import { InstitutionalLayout } from "@/components/institutional-layout"

export default function PoliticaDeTrocaEDevolucaoPage() {
  return (
    <InstitutionalLayout title="Politica de Troca e Devolucao">
      <p>
        Sua satisfacao e garantida. Caso precise trocar ou devolver um produto, siga as orientacoes abaixo.
      </p>
      <h3 className="font-bold text-[#222] text-lg">Prazo</h3>
      <p>
        Voce tem ate 7 dias corridos, a contar do recebimento, para solicitar a troca ou devolucao do produto, conforme
        o Codigo de Defesa do Consumidor.
      </p>
      <h3 className="font-bold text-[#222] text-lg">Condicoes</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>O produto deve estar sem sinais de uso</li>
        <li>Na embalagem original, com todos os acessorios</li>
        <li>Acompanhado da nota fiscal</li>
      </ul>
      <h3 className="font-bold text-[#222] text-lg">Como solicitar</h3>
      <p>
        Entre em contato pelo WhatsApp (48) 98417-5864 ou pelo e-mail suporte@amgcapas.com informando o numero do
        pedido e o motivo da solicitacao.
      </p>
    </InstitutionalLayout>
  )
}
