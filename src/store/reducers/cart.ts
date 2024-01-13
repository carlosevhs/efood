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
    cleanCart: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, cleanCart } = cartSlice.actions
export default cartSlice.reducer
