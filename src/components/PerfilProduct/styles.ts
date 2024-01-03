import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  margin-bottom: 48px;

  img {
    margin: 8px;
    width: 304px;
    height: 167px;
    object-fit: cover;
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
  text-align: justify;
  margin-right: 8px;

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
export const AdicionarAoCarrinhoPreço = styled.div`
  display: inline-block;
  background-color: ${cores.bege};
  color: ${cores.laranja};
  align-items: center;
  justify-content: center;
  align-content: center;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px;
  cursor: pointer;
`

export const Modal = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  position: fixed;
  left: 50%;
  top: 35%;
  transform: translate(-50%, 0);
  z-index: 1;
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
    cursor: pointer;
  }
`
export const NomeDoPrato = styled.h3`
  font-size: 18px;
  font-weight: 900;
`
export const DescricaoDoPrato = styled.p`
  margin: 16px 0;
  font-size: 14px;
  line-height: 22px;
`
