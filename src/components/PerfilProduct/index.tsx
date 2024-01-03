import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  Descricao,
  Titulo,
  Textos,
  AdicionarAoCarrinho,
  Modal,
  ModalContent,
  NomeDoPrato,
  DescricaoDoPrato,
  AdicionarAoCarrinhoPreço
} from './styles'
import fechar from '../../assets/images/fechar.png'

import { Prato } from '../../pages/Home'

type ModalState = {
  isVisible: boolean
}

const PerfilProduct = ({ descricao, foto, nome, preco, porcao }: Prato) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const fecharModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 100) {
      return descricao.slice(0, 96) + '...'
    }
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <Card>
        <img src={foto} alt={nome}></img>
        <Textos>
          <Titulo>{nome}</Titulo>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <Link to={``}>
            <AdicionarAoCarrinho
              onClick={() =>
                setModal({
                  isVisible: true
                })
              }
            >
              Adicionar ao carrinho
            </AdicionarAoCarrinho>
          </Link>
        </Textos>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={foto} alt="" />
          <div>
            <img
              onClick={() => fecharModal()}
              className="botao-fechar"
              src={fechar}
              alt=""
            />
            <NomeDoPrato> {nome}</NomeDoPrato>
            <DescricaoDoPrato>{descricao}</DescricaoDoPrato>
            <DescricaoDoPrato>Serve: {porcao}</DescricaoDoPrato>
            <AdicionarAoCarrinhoPreço>
              Adicionar ao carrinho - {formataPreco(preco)}
            </AdicionarAoCarrinhoPreço>
          </div>
        </ModalContent>
        <div onClick={() => fecharModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default PerfilProduct
