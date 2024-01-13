import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import fechar from '../../assets/images/fechar.png'

import { Prato } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

import * as S from './styles'

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
      <S.Card>
        <img src={prato.foto} alt={prato.nome}></img>
        <S.Textos>
          <S.Titulo>{prato.nome}</S.Titulo>
          <S.Descricao>{getDescricao(prato.descricao)}</S.Descricao>
          <Link to={``}>
            <S.AdicionarAoCarrinho
              onClick={() =>
                setModal({
                  isVisible: true
                })
              }
            >
              Adicionar ao carrinho
            </S.AdicionarAoCarrinho>
          </Link>
        </S.Textos>
      </S.Card>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <img src={prato.foto} alt="" />
          <div>
            <img
              onClick={() => fecharModal()}
              className="botao-fechar"
              src={fechar}
              alt=""
            />
            <S.NomeDoPrato> {prato.nome}</S.NomeDoPrato>
            <S.DescricaoDoPrato>{prato.descricao}</S.DescricaoDoPrato>
            <S.DescricaoDoPrato>Serve: {prato.porcao}</S.DescricaoDoPrato>
            <S.AdicionarAoCarrinhoPreço
              onClick={() => (fecharModal(), addToCart())}
            >
              Adicionar ao carrinho - {formataPreco(prato.preco)}
            </S.AdicionarAoCarrinhoPreço>
          </div>
        </S.ModalContent>
        <div onClick={() => fecharModal()} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default PerfilProduct
