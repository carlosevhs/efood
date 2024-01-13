import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import heroImg from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { Overlay } from '../Cart/styled'

import * as S from './styles'

type Props = {
  perfilRestaurante: {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: [
      {
        nome: string
        descricao: string
        foto: string
        preco: number
        id: number
        porcao: string
      }
    ]
  }
}

const PerfilHero = ({ perfilRestaurante }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const tipoCapitalized =
    perfilRestaurante.tipo.charAt(0).toUpperCase() +
    perfilRestaurante.tipo.slice(1)

  return (
    <>
      <S.Imagem style={{ backgroundImage: `url(${heroImg})` }}>
        <S.Container className="container">
          <Link to="/">Restaurantes</Link>
          <img src={logo} />
          <div onClick={openCart}>
            <p> {items.length} produto(s) no carrinho</p>
          </div>
        </S.Container>
      </S.Imagem>
      <S.CapaDePerfil
        style={{
          backgroundImage: `url(${perfilRestaurante.capa})`,
          backgroundSize: 'cover'
        }}
      >
        <Overlay />
        <S.TextosDaCapa className="container">
          <p>{tipoCapitalized}</p>
          <h2>{perfilRestaurante.titulo}</h2>
        </S.TextosDaCapa>
      </S.CapaDePerfil>
    </>
  )
}

export default PerfilHero
