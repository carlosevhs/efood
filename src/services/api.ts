import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurantes } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchsaeResponse = {
  orderId: string
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: 12
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        mount: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHome: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getPerfil: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchsaeResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetHomeQuery, useGetPerfilQuery, usePurchaseMutation } = api
export default api
