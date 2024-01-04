import {
  Overlay,
  CartContainer,
  Sidebar,
  ItensNoCarrinhos,
  Prices,
  BotaoExcluir,
  BotaoContinuarComAEntrega
} from './styled'

import excluir from '../../assets/images/delete.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../PerfilProduct'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ItensNoCarrinhos>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p> {formataPreco(item.preco)}</p>
              </div>
              <BotaoExcluir onClick={() => removeItem(item.id)}>
                <img src={excluir} alt="Excluir" />
              </BotaoExcluir>
            </li>
          ))}
        </ItensNoCarrinhos>
        <Prices>
          <p>Valor total</p>
          <span>{formataPreco(getTotalPrice())}</span>
        </Prices>
        <BotaoContinuarComAEntrega>
          Continuar com a entrega
        </BotaoContinuarComAEntrega>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
