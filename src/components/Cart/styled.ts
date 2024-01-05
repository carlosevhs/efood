import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 230px;
  }
`
export const ItensNoCarrinhos = styled.ul`
  li {
    position: relative;
    display: flex;
    background-color: ${cores.bege};
    margin-bottom: 16px;
    padding: 8px 12px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }
`
export const Prices = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.bege};
  display: flex;
  justify-content: space-between;
`
export const BotaoExcluir = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
    margin: 0;
  }
`
export const BotaoContinuarComAEntrega = styled.div`
  display: flex;
  background-color: ${cores.bege};
  color: ${cores.laranja};
  align-items: center;
  justify-content: center;
  align-content: center;
  font-size: 14px;
  font-weight: 700;
  height: 24px;
  cursor: pointer;
  margin-bottom: 8px;
`
export const Formulario = styled.div`
  font-weight: bold;
  color: ${cores.bege};
  margin-bottom: 24px;
  font-size: 14px;
  h3 {
    margin-bottom: 16px;
    font-size: 16px;
  }
`
export const CepENumero = styled.div`
  display: flex;
  gap: 0 34px;
`
export const Inputs = styled.div`
  margin-bottom: 8px;
  input {
    display: block;
    width: 100%;
    background-color: ${cores.bege};
    border: 1px solid ${cores.bege};
    margin-top: 8px;
    height: 32px;
    padding: 8px;
    font-weight: bold;
    font-size: 14px;
`
