import { Link } from 'react-router-dom'

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

import estrela from '../../assets/images/estrela.svg'

type Props = {
  titulo: string
  descricao: string
  imagem: string
  nota: number
  tipo: string
  destacado: boolean
  id: number
}

const Product = ({
  descricao,
  imagem,
  tipo,
  destacado,
  nota,
  titulo,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 190) {
      return descricao.slice(0, 187) + '...'
    }
  }
  const tipoCapitalized = tipo.charAt(0).toUpperCase() + tipo.slice(1)

  return (
    <Card>
      <img src={imagem} alt={titulo}></img>
      <Infos>
        <div style={{ display: destacado ? 'inline-block' : 'none' }}>
          <Tag size="small">Destade da semana</Tag>
        </div>
        <Tag size="small">{tipoCapitalized}</Tag>
      </Infos>
      <Textos>
        <CabecalhoCard>
          <Titulo>{titulo}</Titulo>
          <Avaliacao>
            <h3>{nota}</h3>
            <img src={estrela} />
          </Avaliacao>
        </CabecalhoCard>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <Link to={`/perfil/${id}`}>
          <Tag size="big">Saiba mais</Tag>
        </Link>
      </Textos>
    </Card>
  )
}

export default Product
