import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../pages/Home'

type CartState = {
  items: Prato[]
  isOpen: boolean
  layout: string
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  layout: 'pagItems'
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const game = state.items.find((item) => item.id === action.payload.id)
      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('A refeição ja foi escolhida')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    moveToDelivery: (state) => {
      if (state.items.length == 0) {
        alert('Você precisa adicionar pelo menos um item ao carrinho')
      } else {
        state.layout = 'delivery'
      }
    },
    moveToPay: (state) => {
      state.layout = 'payment'
    },
    moveToConfirmation: (state) => {
      state.layout = 'confirmation'
    },
    moveToPagItems: (state) => {
      state.layout = 'pagItems'
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  moveToConfirmation,
  moveToDelivery,
  moveToPay,
  moveToPagItems
} = cartSlice.actions
export default cartSlice.reducer
