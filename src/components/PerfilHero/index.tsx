import { Link } from 'react-router-dom'

import { CapaDePerfil, Container, Imagem, TextosDaCapa } from './styles'

import heroImg from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

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
  return (
    <>
      <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
        <Container className="container">
          <Link to="/">Restaurantes</Link>
          <img src={logo} />
          <p> 0 produto(s) no carrinho</p>
        </Container>
      </Imagem>
      <CapaDePerfil
        style={{
          backgroundImage: `url(${perfilRestaurante.capa})`,
          backgroundSize: 'cover'
        }}
      >
        <TextosDaCapa className="container">
          <p>{perfilRestaurante.tipo}</p>
          <h2>{perfilRestaurante.titulo}</h2>
        </TextosDaCapa>
      </CapaDePerfil>
    </>
  )
}

export default PerfilHero
