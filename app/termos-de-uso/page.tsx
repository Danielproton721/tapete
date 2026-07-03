import { InstitutionalLayout } from "@/components/institutional-layout"

export default function TermosDeUsoPage() {
  return (
    <InstitutionalLayout title="Termos de Uso">
      <p>
        Ao acessar e utilizar o site da AMG Capas, voce concorda com os termos e condicoes descritos abaixo.
      </p>
      <h3 className="font-bold text-[#222] text-lg">Uso do site</h3>
      <p>
        O conteudo deste site destina-se a informacao e a comercializacao dos nossos produtos. E proibida a reproducao
        sem autorizacao previa.
      </p>
      <h3 className="font-bold text-[#222] text-lg">Precos e disponibilidade</h3>
      <p>
        Os precos e a disponibilidade dos produtos estao sujeitos a alteracao sem aviso previo. Eventuais erros de
        cadastro poderao ser corrigidos, mesmo apos a confirmacao do pedido.
      </p>
      <h3 className="font-bold text-[#222] text-lg">Responsabilidades</h3>
      <p>
        A AMG Capas nao se responsabiliza por danos decorrentes do uso indevido dos produtos ou de informacoes
        fornecidas incorretamente no momento da compra.
      </p>
    </InstitutionalLayout>
  )
}
