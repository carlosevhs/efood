import PerfilProduct from '../PerfilProduct'
import { Restaurantes } from '../../pages/Home'

import { List } from './styles'

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
