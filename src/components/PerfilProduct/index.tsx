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
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type ModalState = {
  isVisible: boolean
}
type Props = {
  prato: Prato
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const PerfilProduct = ({ prato }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

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

  return (
    <>
      <Card>
        <img src={prato.foto} alt={prato.nome}></img>
        <Textos>
          <Titulo>{prato.nome}</Titulo>
          <Descricao>{getDescricao(prato.descricao)}</Descricao>
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
          <img src={prato.foto} alt="" />
          <div>
            <img
              onClick={() => fecharModal()}
              className="botao-fechar"
              src={fechar}
              alt=""
            />
            <NomeDoPrato> {prato.nome}</NomeDoPrato>
            <DescricaoDoPrato>{prato.descricao}</DescricaoDoPrato>
            <DescricaoDoPrato>Serve: {prato.porcao}</DescricaoDoPrato>
            <AdicionarAoCarrinhoPreço
              onClick={() => (fecharModal(), addToCart())}
            >
              Adicionar ao carrinho - {formataPreco(prato.preco)}
            </AdicionarAoCarrinhoPreço>
          </div>
        </ModalContent>
        <div onClick={() => fecharModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default PerfilProduct
