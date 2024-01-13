import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useState } from 'react'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import excluir from '../../assets/images/delete.png'
import { RootReducer } from '../../store'
import { close, remove, cleanCart } from '../../store/reducers/cart'
import { formataPreco } from '../PerfilProduct'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styled'

const Cart = () => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullname: '',
      adress: '',
      city: '',
      postalCode: '',
      numberHouse: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      securityCode: '',
      expiryMounth: '',
      expiryYear: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      postalCode: Yup.string()
        .min(10, 'CEP inválido')
        .max(10, 'CEP inválido')
        .required('O campo é obrigatório'),
      numberHouse: Yup.number().required('O campo é obrigatório'),

      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      securityCode: Yup.string().required('O campo é obrigatório'),
      expiryMounth: Yup.string().required('O campo é obrigatório'),
      expiryYear: Yup.string().required('O campo é obrigatório')
    }),

    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.adress,
          address: {
            city: values.city,
            complement: values.complement,
            description: values.adress,
            zipCode: values.postalCode,
            number: 12
          }
        },
        payment: {
          card: {
            code: Number(values.securityCode),
            expires: {
              mount: Number(values.expiryMounth),
              year: Number(values.expiryYear)
            },
            name: values.cardName,
            number: values.cardNumber
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  const checkInputHasError = (fieldName: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors
    const hasError = estaAlterado && estaInvalido

    return hasError
  }

  console.log(form)
  const goToPayment = () => {
    const sujo = form.dirty
    const nome =
      getErrorMessage('fullname', form.errors.fullname) ||
      form.values.fullname == ''
    const endereco =
      getErrorMessage('adress', form.errors.adress) || form.values.adress == ''
    const cidade =
      getErrorMessage('city', form.errors.city) || form.values.city == ''
    const cep =
      getErrorMessage('postalCode', form.errors.postalCode) ||
      form.values.postalCode.length < 10
    const numero =
      getErrorMessage('numberHouse', form.errors.numberHouse) ||
      form.values.numberHouse == ''
    const podePagar = !nome && !endereco && !cidade && !cep && !numero && sujo
    return podePagar
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const cleaner = () => {
    dispatch(cleanCart())
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

  const [displayItems, setDisplayItems] = useState<string>('block')
  const alteraDisplayItems = () => {
    setDisplayItems((prevDisplay) =>
      prevDisplay === 'block' ? 'none' : 'block'
    )
  }
  const [displayDelivery, setDisplayDelivery] = useState<string>('none')
  const alteraDisplayDelivery = () => {
    setDisplayDelivery((prevDisplay) =>
      prevDisplay === 'block' ? 'none' : 'block'
    )
  }
  const [displayPayment, setDisplayPayment] = useState<string>('none')
  const alteraDisplayPayment = () => {
    setDisplayPayment((prevDisplay) =>
      prevDisplay === 'block' ? 'none' : 'block'
    )
  }
  const [displayConfirmation, setDisplayConfirmation] = useState<string>('none')
  const alteraDisplayConfirmation = () => {
    setDisplayConfirmation((prevDisplay) =>
      prevDisplay === 'block' ? 'none' : 'block'
    )
  }

  const [displayErrorDelivery, setDisplayErrorDelivery] =
    useState<string>('none')
  const showErrorDelivery = () => {
    setDisplayErrorDelivery('block')
  }
  const hideErrorDelivery = () => {
    setDisplayErrorDelivery('none')
  }

  const [displayErrorPayment, setDisplayErrorPayment] = useState<string>('none')
  const showErrorPayment = () => {
    setDisplayErrorPayment('block')
  }
  const hideErrorPayment = () => {
    setDisplayErrorPayment('none')
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => closeCart()} />
      <form onSubmit={form.handleSubmit} className="cart">
        <S.SidebarItems display={displayItems}>
          <S.ItensNoCarrinhos>
            {items.map((item) => (
              <li key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p> {formataPreco(item.preco)}</p>
                </div>
                <S.BotaoExcluir onClick={() => removeItem(item.id)}>
                  <img src={excluir} alt="Excluir" />
                </S.BotaoExcluir>
              </li>
            ))}
          </S.ItensNoCarrinhos>
          {items.length > 0 ? (
            <>
              <S.Prices>
                <p>Valor total</p>
                <span>{formataPreco(getTotalPrice())}</span>
              </S.Prices>
              <S.BotaoContinuarComAEntrega
                onClick={() => (alteraDisplayItems(), alteraDisplayDelivery())}
              >
                Continuar com a entrega
              </S.BotaoContinuarComAEntrega>
            </>
          ) : (
            <S.Prices>
              <p>
                Seu carrinho está vazio! Adicione pelo menos um item no
                carrinho!
              </p>
            </S.Prices>
          )}
        </S.SidebarItems>
        <S.SidebarDelivery display={displayDelivery}>
          <S.Formulario>
            <h3>Entrega</h3>
            <S.Inputs>
              <label htmlFor="fullname">Quem irá receber</label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.fullname}
                className={checkInputHasError('fullname') ? 'error' : ''}
              />
            </S.Inputs>
            <S.Inputs>
              <label htmlFor="adress">Endereço</label>
              <input
                id="adress"
                type="text"
                name="adress"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.adress}
                className={checkInputHasError('adress') ? 'error' : ''}
              />
            </S.Inputs>
            <S.Inputs>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.city}
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </S.Inputs>
            <S.CepENumero>
              <S.Inputs>
                <label htmlFor="postalCode">CEP</label>
                <InputMask
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.postalCode}
                  className={checkInputHasError('postalCode') ? 'error' : ''}
                  mask="99.999-999"
                />
              </S.Inputs>
              <S.Inputs>
                <label htmlFor="numberHouse">Número</label>
                <input
                  id="numberHouse"
                  type="number"
                  name="numberHouse"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.numberHouse}
                  className={checkInputHasError('numberHouse') ? 'error' : ''}
                />
              </S.Inputs>
            </S.CepENumero>
            <S.Inputs>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                type="text"
                name="complement"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.complement}
              />
            </S.Inputs>
          </S.Formulario>
          <S.BotaoFinalizarCompra
            type="button"
            onClick={() =>
              goToPayment()
                ? (alteraDisplayPayment(),
                  alteraDisplayDelivery(),
                  hideErrorDelivery())
                : showErrorDelivery()
            }
          >
            Continuar com o pagamento
          </S.BotaoFinalizarCompra>
          <S.Mensagem display={displayErrorDelivery}>
            {goToPayment() ? (
              ''
            ) : (
              <S.MensageError>Formulário Invalido</S.MensageError>
            )}
          </S.Mensagem>
          <S.BotaoContinuarComAEntrega
            onClick={() => (
              alteraDisplayItems(), alteraDisplayDelivery(), hideErrorDelivery()
            )}
          >
            Voltar para o carrinho
          </S.BotaoContinuarComAEntrega>
        </S.SidebarDelivery>
        <S.SidebarPayment display={displayPayment}>
          <S.Formulario>
            <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h3>
            <S.Inputs>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                type="text"
                name="cardName"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.cardName}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
            </S.Inputs>
            <S.CepENumero>
              <S.Inputs>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.cardNumber}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  mask="9999 9999 9999 9999"
                />
              </S.Inputs>
              <S.Inputs className="cvv">
                <label htmlFor="securityCode">CVV</label>
                <InputMask
                  id="securityCode"
                  type="text"
                  name="securityCode"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.securityCode}
                  className={checkInputHasError('securityCode') ? 'error' : ''}
                  mask="999"
                />
              </S.Inputs>
            </S.CepENumero>
            <S.CepENumero>
              <S.Inputs>
                <label htmlFor="expiryMounth">Mês de vencimento</label>
                <InputMask
                  id="expiryMounth"
                  type="text"
                  name="expiryMounth"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.expiryMounth}
                  className={checkInputHasError('expiryMounth') ? 'error' : ''}
                  mask="99"
                />
              </S.Inputs>
              <S.Inputs>
                <label htmlFor="expiryYear">Ano de vencimento</label>
                <InputMask
                  id="expiryYear"
                  type="text"
                  name="expiryYear"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.expiryYear}
                  className={checkInputHasError('expiryYear') ? 'error' : ''}
                  mask="99"
                />
              </S.Inputs>
            </S.CepENumero>
          </S.Formulario>
          <S.BotaoFinalizarCompra
            type="submit"
            onClick={() =>
              form.isValid
                ? (alteraDisplayPayment(),
                  alteraDisplayConfirmation(),
                  hideErrorPayment())
                : showErrorPayment()
            }
          >
            Finalizar pagamento
          </S.BotaoFinalizarCompra>
          <S.Mensagem display={displayErrorPayment}>
            {form.isValid ? (
              <></>
            ) : (
              <S.MensageError>Dados do cartão incorreto</S.MensageError>
            )}
          </S.Mensagem>
          <S.BotaoContinuarComAEntrega
            onClick={() => (
              alteraDisplayPayment(),
              alteraDisplayDelivery(),
              hideErrorPayment()
            )}
          >
            Voltar para edição de endereço
          </S.BotaoContinuarComAEntrega>
        </S.SidebarPayment>
        <S.Sidebar display={displayConfirmation}>
          {isSuccess && data ? (
            <S.FinalizacaoDoPedido>
              <h3>Pedido realizado - {data.orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.{' '}
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </S.FinalizacaoDoPedido>
          ) : (
            ''
          )}
          <S.BotaoContinuarComAEntrega
            onClick={() =>
              isLoading
                ? ''
                : (closeCart(),
                  cleaner(),
                  alteraDisplayConfirmation(),
                  alteraDisplayItems())
            }
          >
            {isLoading ? 'Processando compra...' : 'Finalizar compra'}
          </S.BotaoContinuarComAEntrega>
        </S.Sidebar>
      </form>
    </S.CartContainer>
  )
}

export default Cart
