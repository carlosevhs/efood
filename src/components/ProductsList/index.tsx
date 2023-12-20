import Product from '../Product'
import { List } from './styles'

import Restaurant from '../../models/Restaurants'

export type Props = {
  restaurants: Restaurant[]
}

const ProductList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Product
          key={restaurant.id}
          descricao={restaurant.descricao}
          imagem={restaurant.image}
          infos={restaurant.infos}
          nota={restaurant.nota}
          titulo={restaurant.titulo}
          link={restaurant.link}
        />
      ))}
    </List>
  </div>
)

export default ProductList
