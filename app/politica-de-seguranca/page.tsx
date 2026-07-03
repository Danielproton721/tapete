import { InstitutionalLayout } from "@/components/institutional-layout"

export default function PoliticaDeSegurancaPage() {
  return (
    <InstitutionalLayout title="Politica de Seguranca">
      <p>
        A seguranca das suas informacoes e das suas transacoes e prioridade para a AMG Capas.
      </p>
      <h3 className="font-bold text-[#222] text-lg">Pagamentos protegidos</h3>
      <p>
        Todas as transacoes sao processadas por gateways de pagamento certificados, com criptografia de ponta a ponta.
        Nao armazenamos dados de cartao de credito em nossos servidores.
      </p>
      <h3 className="font-bold text-[#222] text-lg">Navegacao segura</h3>
      <p>
        Nosso site utiliza conexao segura (SSL) para garantir que os dados transmitidos entre voce e a loja permanecam
        protegidos.
      </p>
    </InstitutionalLayout>
  )
}
