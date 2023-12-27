import OpcoesRestaurant from '../../models/Opcoesrestaurants'

import pizza from '../../assets/images/pizza.png'
import RestaurantList from '../../components/RestaurantList'
import PerfilHero from '../../components/PerfilHero'
import Footer from '../../components/Footer'

const opcpesDeRestautantes: OpcoesRestaurant[] = [
  {
    id: 1,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    link: '',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 2,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    link: '',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 3,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    link: '',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 4,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    link: '',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 5,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    link: '',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 6,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    link: '',
    titulo: 'Pizza Marguerita'
  }
]

const Perfil = () => (
  <>
    <PerfilHero />
    <RestaurantList opcoesRestaurants={opcpesDeRestautantes} />
    <Footer />
  </>
)

export default Perfil
