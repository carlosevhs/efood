import { List } from './styles'

import PerfilProduct from '../PerfilProduct'
import OpcoesRestaurant from '../../models/Opcoesrestaurants'

export type Props = {
  opcoesRestaurants: OpcoesRestaurant[]
}

const RestaurantList = ({ opcoesRestaurants }: Props) => (
  <div className="container">
    <List>
      {opcoesRestaurants.map((restaurant) => (
        <PerfilProduct
          key={restaurant.id}
          descricao={restaurant.descricao}
          imagem={restaurant.image}
          titulo={restaurant.titulo}
          link={restaurant.link}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
