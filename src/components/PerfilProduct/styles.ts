import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  margin-bottom: 48px;

  img {
    margin: 8px;
  }
  a {
    text-decoration: none;
  }
`
export const Textos = styled.div`
  color: ${cores.bege};
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  margin: 0 8px 0 8px;
`
export const Descricao = styled.p`
  font-size: 14px
  Line-height: 22px;
  font-weight: 400;
  display: block;
  margin-left: 8px;
  margin-top: 8px;
`
export const AdicionarAoCarrinho = styled.div`
  display: flex;
  background-color: ${cores.bege};
  color: ${cores.laranja};
  margin: 8px;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-size: 16px;
  font-weight: 700;
  height: 24px;
`
