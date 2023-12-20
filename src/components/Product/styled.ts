import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  margin-bottom: 48px;
  position: relative;

  img {
    margin-bottom: -6px;
  }
`
export const Textos = styled.div`
  border: 1px solid ${cores.laranja};
`
export const CabecalhoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 8px 16px 8px;
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 8px;
    margin-bottom: 0;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px
  display: block;
  margin-bottom: 16px
  margin-left: 8px;
`
export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  Line height: 22px;
  display: block;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
`
export const Infos = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`
