import { Link } from 'react-router-dom'

import Tag from '../Tag'

import estrela from '../../assets/images/estrela.svg'

import * as S from './styled'

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
    <S.Card>
      <img src={imagem} alt={titulo}></img>
      <S.Infos>
        <div style={{ display: destacado ? 'inline-block' : 'none' }}>
          <Tag size="small">Destade da semana</Tag>
        </div>
        <Tag size="small">{tipoCapitalized}</Tag>
      </S.Infos>
      <S.Textos>
        <S.CabecalhoCard>
          <S.Titulo>{titulo}</S.Titulo>
          <S.Avaliacao>
            <h3>{nota}</h3>

            <img src={estrela} />
          </S.Avaliacao>
        </S.CabecalhoCard>
        <S.Descricao>{getDescricao(descricao)}</S.Descricao>
        <Link to={`/perfil/${id}`}>
          <Tag size="big">Saiba mais</Tag>
        </Link>
      </S.Textos>
    </S.Card>
  )
}

export default Product
