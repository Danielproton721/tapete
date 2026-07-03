import { InstitutionalLayout } from "@/components/institutional-layout"

export default function ContatoPage() {
  return (
    <InstitutionalLayout title="Entrar em contato">
      <p>
        Fale com a nossa equipe pelos canais abaixo. Atendemos de segunda a sabado, das 8h as 19h.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Vendas e Informacoes - WhatsApp: (48) 98402-5725</li>
        <li>Suporte ao Cliente - WhatsApp: (48) 98417-5864</li>
        <li>E-mail: suporte@amgcapas.com</li>
      </ul>
      <p>
        Para acompanhamento de pedidos, trocas e devolucoes, informe o numero do seu pedido para agilizar o
        atendimento.
      </p>
    </InstitutionalLayout>
  )
}
