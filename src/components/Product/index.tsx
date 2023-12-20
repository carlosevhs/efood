import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  Textos,
  Avaliacao,
  CabecalhoCard,
  Infos
} from './styled'

type Props = {
  titulo: string
  descricao: string
  imagem: string
  nota: string
  infos: string[]
  link: string
}

import estrela from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'

const Product = ({ descricao, imagem, infos, nota, titulo, link }: Props) => (
  <Card>
    <img src={imagem} alt={titulo}></img>
    <Infos>
      {infos.map((info) => (
        <Tag key={info} size="small">
          {info}
        </Tag>
      ))}
    </Infos>
    <Textos>
      <CabecalhoCard>
        <Titulo>{titulo}</Titulo>
        <Avaliacao>
          <h3>{nota}</h3>
          <img src={estrela} />
        </Avaliacao>
      </CabecalhoCard>
      <Descricao>{descricao}</Descricao>
      <Link to={link}>
        <Tag size="big">Saiba mais</Tag>
      </Link>
    </Textos>
  </Card>
)

export default Product
