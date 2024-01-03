import { List } from './styles'

import PerfilProduct from '../PerfilProduct'
import { Prato } from '../../pages/Home'

export type Props = {
  opcoesPratos: Prato[]
}

const RestaurantList = ({ opcoesPratos }: Props) => {
  return (
    <>
      <div className="container">
        <List>
          {opcoesPratos.map((prato) => (
            <PerfilProduct
              key={prato.id}
              descricao={prato.descricao}
              foto={prato.foto}
              nome={prato.nome}
              preco={prato.preco}
              porcao={prato.porcao}
              id={prato.id}
            />
          ))}
        </List>
      </div>
    </>
  )
}

export default RestaurantList
