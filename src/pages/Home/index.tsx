import Hero from '../../components/Hero'
import ProductList from '../../components/ProductsList'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

export interface Prato {
  nome: string
  descricao: string
  foto: string
  preco: number
  id: number
  porcao: string
}

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      nome: string
      descricao: string
      foto: string
      preco: number
      id: number
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  })

  if (!restaurantes) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Hero />
      <ProductList restaurants={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
