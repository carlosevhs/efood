import { Imagem } from './style'

import heroImg from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
    <img src={logo} />
    <h2>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </h2>
  </Imagem>
)

export default Hero
