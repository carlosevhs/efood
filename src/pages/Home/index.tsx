import Hero from '../../components/Hero'
import ProductList from '../../components/ProductsList'
import Restaurant from '../../models/Restaurants'

import sushi from '../../assets/images/sushi.png'
import italiana from '../../assets/images/macarrao.png'
import Footer from '../../components/Footer'

const opcpesDeRestautantes: Restaurant[] = [
  {
    id: 1,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    nota: '4.9',
    infos: ['Destaque da semana', 'Japonesa'],
    link: './perfil',
    titulo: 'Hioki Sushi'
  },
  {
    id: 2,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    nota: '4.9',
    infos: ['Italiana'],
    link: './perfil',
    titulo: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    nota: '4.9',
    infos: ['Italiana'],
    link: './perfil',
    titulo: 'La Dolce Vita Trattoria'
  },
  {
    id: 4,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    nota: '4.9',
    infos: ['Italiana'],
    link: './perfil',
    titulo: 'La Dolce Vita Trattoria'
  },
  {
    id: 5,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    nota: '4.9',
    infos: ['Italiana'],
    link: './perfil',
    titulo: 'La Dolce Vita Trattoria'
  },
  {
    id: 6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    nota: '4.9',
    infos: ['Italiana'],
    link: './perfil',
    titulo: 'La Dolce Vita Trattoria'
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductList restaurants={opcpesDeRestautantes} />
    <Footer />
  </>
)

export default Home
