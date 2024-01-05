import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { Overlay } from '../Cart/styled'

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
  position: relative;
  width: 100%;
  height: 280px;
  margin-bottom: 80px;
  background: no-repeat;

  ${Overlay} {
    opacity: 50%;
  }
`
export const TextosDaCapa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  height: 100%;
  font-size: 32px;
  p {
    z-index: 1;
    margin-top: 24px;
    font-weight: 100;
  }
  h2 {
    z-index: 1;
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

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }

  img {
    @media (max-width: ${breakpoints.tablet}) {
      margin: 20px 0;
    }
  }
  p {
    line-height: 21px;
    display: block;
  }

  a {
    text-decoration: none;
    color: ${cores.laranja};
  }

  div {
    cursor: pointer;
  }
`
