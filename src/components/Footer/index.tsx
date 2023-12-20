import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instaran from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import { FooterBar, LogoImg, RedesSociais } from './styles'

const Footer = () => (
  <FooterBar>
    <LogoImg src={logo} alt="efood" />
    <RedesSociais>
      <a href="">
        <img src={instaran} alt="" />
      </a>
      <a href="">
        <img src={facebook} alt="" />
      </a>
      <a href="">
        <img src={twitter} alt="" />
      </a>
    </RedesSociais>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterBar>
)

export default Footer
