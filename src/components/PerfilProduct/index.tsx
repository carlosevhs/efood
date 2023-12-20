import { Card, Descricao, Titulo, Textos, AdicionarAoCarrinho } from './styles'

type Props = {
  titulo: string
  descricao: string
  imagem: string
  link: string
}

import { Link } from 'react-router-dom'

const PerfilProduct = ({ descricao, imagem, titulo, link }: Props) => (
  <Card>
    <img src={imagem} alt={titulo}></img>
    <Textos>
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
      <Link to={link}>
        <AdicionarAoCarrinho>Adicionar ao carrinho</AdicionarAoCarrinho>
      </Link>
    </Textos>
  </Card>
)

export default PerfilProduct
