import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const FooterBar = styled.div`
  background-color: ${cores.bege};
  margin-top: 0;
  display: block;
  width: 100%;
  height: 298px;
  text-align: center;

  p {
    margin-top: 80px;
    margin-bottom: 40px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`
export const LogoImg = styled.img`
  margin-top: 40px;
  margin-bottom: 32px;
`
export const RedesSociais = styled.div`
  text-align: center;

  a {
    margin: 0 4px;
  }
`
