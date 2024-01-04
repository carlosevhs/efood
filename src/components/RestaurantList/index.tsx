import { List } from './styles'

import PerfilProduct from '../PerfilProduct'
import { Restaurantes } from '../../pages/Home'

export type Props = {
  opcoesPratos: Restaurantes
}

const RestaurantList = ({ opcoesPratos }: Props) => {
  return (
    <>
      <div className="container">
        <List>
          {opcoesPratos.cardapio.map((prato) => (
            <PerfilProduct key={prato.id} prato={prato} />
          ))}
        </List>
      </div>
    </>
  )
}

export default RestaurantList
