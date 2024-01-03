import { Restaurantes } from '../../pages/Home'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  restaurants: Restaurantes[]
}

const ProductList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Product
          key={restaurant.id}
          id={restaurant.id}
          descricao={restaurant.descricao}
          imagem={restaurant.capa}
          tipo={restaurant.tipo}
          destacado={restaurant.destacado}
          nota={restaurant.avaliacao}
          titulo={restaurant.titulo}
        />
      ))}
    </List>
  </div>
)

export default ProductList
