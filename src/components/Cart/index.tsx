import {
  Overlay,
  CartContainer,
  Sidebar,
  ItensNoCarrinhos,
  Prices,
  BotaoExcluir,
  BotaoContinuarComAEntrega,
  Formulario,
  Inputs,
  CepENumero
} from './styled'

import excluir from '../../assets/images/delete.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  close,
  remove,
  moveToConfirmation,
  moveToDelivery,
  moveToPagItems,
  moveToPay
} from '../../store/reducers/cart'
import { formataPreco } from '../PerfilProduct'

const Cart = () => {
  const { isOpen, items, layout } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const pagItems = () => {
    dispatch(moveToPagItems())
  }
  const delivery = () => {
    dispatch(moveToDelivery())
  }
  const payment = () => {
    dispatch(moveToPay())
  }
  const confirmation = () => {
    dispatch(moveToConfirmation())
  }

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
      <Overlay onClick={() => (closeCart(), pagItems())} />
      <>
        {layout === 'pagItems' ? (
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
            <BotaoContinuarComAEntrega onClick={delivery}>
              Continuar com a entrega
            </BotaoContinuarComAEntrega>
          </Sidebar>
        ) : layout === 'delivery' ? (
          <Sidebar>
            <Formulario>
              <h3>Entrega</h3>
              <Inputs>
                <label htmlFor="">Quem irá receber</label>
                <input type="text" />
              </Inputs>
              <Inputs>
                <label htmlFor="">Endereço</label>
                <input type="text" />
              </Inputs>
              <Inputs>
                <label htmlFor="">Cidade</label>
                <input type="text" />
              </Inputs>
              <CepENumero>
                <Inputs>
                  <label htmlFor="">CEP</label>
                  <input type="text" />
                </Inputs>
                <Inputs>
                  <label htmlFor="">Número</label>
                  <input type="text" />
                </Inputs>
              </CepENumero>
              <Inputs>
                <label htmlFor="">Complemento (opcional)</label>
                <input type="text" />
              </Inputs>
            </Formulario>
            <BotaoContinuarComAEntrega onClick={payment}>
              Continuar com o pagamento
            </BotaoContinuarComAEntrega>
            <BotaoContinuarComAEntrega onClick={pagItems}>
              Voltar para o carrinho
            </BotaoContinuarComAEntrega>
          </Sidebar>
        ) : layout === 'payment' ? (
          <Sidebar>
            <BotaoContinuarComAEntrega onClick={confirmation}>
              Finalizar pagamento
            </BotaoContinuarComAEntrega>
            <BotaoContinuarComAEntrega onClick={delivery}>
              Voltar para a entrega
            </BotaoContinuarComAEntrega>
          </Sidebar>
        ) : layout === 'confirmation' ? (
          <Sidebar>
            <BotaoContinuarComAEntrega
              onClick={() => (closeCart(), pagItems())}
            >
              Concluir
            </BotaoContinuarComAEntrega>
          </Sidebar>
        ) : null}
      </>
    </CartContainer>
  )
}

export default Cart
