import heroImg from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

import { Imagem } from './style'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
    <h1>
      <img src={logo} alt="efood" />
    </h1>
    <h2>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </h2>
  </Imagem>
)

export default Hero
