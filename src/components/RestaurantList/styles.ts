import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  background-color: ${cores.begeClaro};
`

export const Modal = styled.div`
  position: fixed;
  top: 490px;
  width: 100%;
  height: 100%;
`
export const ModalContent = styled.div`
  position: relative;
  display: flex;
  padding: 32px;
  background-color: ${cores.laranja};
  color: ${cores.begeClaro};

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  .botao-fechar {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`
export const NomeDoPrato = styled.h3`
  font-size: 18px;
  font-weight: 900;
`
export const DescricaoDoPrato = styled.p`
  margin: 16px 0;
  font-size: 14px;
`

export const AdicionarAoCarrinho = styled.div`
  display: inline-block;
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
