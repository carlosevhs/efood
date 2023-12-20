import { CapaDePerfil, Container, Imagem, TextosDaCapa } from './styles'

import heroImg from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import apresentacao from '../../assets/images/imagem-hero.png'

const PerfilHero = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
      <Container className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logo} />
        <p> 0 produto(s) no carrinho</p>
      </Container>
    </Imagem>
    <CapaDePerfil
      style={{
        backgroundImage: `url(${apresentacao})`,
        backgroundSize: 'cover'
      }}
    >
      <TextosDaCapa className="container">
        <p>Italiana</p>
        <h2>La Dolce Vita Trattoria</h2>
      </TextosDaCapa>
    </CapaDePerfil>
  </>
)

export default PerfilHero
