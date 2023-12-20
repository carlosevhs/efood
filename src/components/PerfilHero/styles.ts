import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 125px;
  }
`
export const CapaDePerfil = styled.div`
  width: 100%;
  height: 280px;
  margin-bottom: 80px;
  background: no-repeat;
`
export const TextosDaCapa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  height: 100%;
  p {
    margin-top: 24px;
    font-weight: 100;
  }
  h2 {
    margin-bottom: 32px;
    font-weight: 900;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
  font-size: 18px;

  p {
    line-height: 21px;
    display: block;
  }

  a {
    text-decoration: none;
    color: ${cores.laranja};
  }
`
