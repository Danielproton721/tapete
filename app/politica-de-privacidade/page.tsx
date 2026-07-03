import { InstitutionalLayout } from "@/components/institutional-layout"

export default function PoliticaDePrivacidadePage() {
  return (
    <InstitutionalLayout title="Politica de Privacidade">
      <p>
        A AMG Capas respeita a sua privacidade e se compromete a proteger os dados pessoais coletados durante a sua
        navegacao e suas compras.
      </p>
      <h3 className="font-bold text-[#222] text-lg">Coleta de dados</h3>
      <p>
        Coletamos apenas as informacoes necessarias para processar pedidos, realizar entregas e oferecer suporte, como
        nome, endereco, e-mail e telefone.
      </p>
      <h3 className="font-bold text-[#222] text-lg">Uso das informacoes</h3>
      <p>
        Os dados sao utilizados exclusivamente para o cumprimento do pedido, comunicacao sobre o status da compra e,
        quando autorizado, envio de ofertas e novidades.
      </p>
      <h3 className="font-bold text-[#222] text-lg">Seguranca</h3>
      <p>
        Adotamos medidas tecnicas e organizacionais para proteger seus dados contra acesso nao autorizado, perda ou
        divulgacao indevida.
      </p>
    </InstitutionalLayout>
  )
}
