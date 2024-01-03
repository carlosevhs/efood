import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import RestaurantList from '../../components/RestaurantList'
import PerfilHero from '../../components/PerfilHero'
import Footer from '../../components/Footer'
import { Prato, Restaurantes } from '../Home'

const Perfil = () => {
  const [pratos, setPratos] = useState<Prato[]>([])
  const [restaurante, setRestaurante] = useState<Restaurantes>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurante(res)
        setPratos(res.cardapio)
      })
  }, [id])

  if (!restaurante) {
    return <div>Carregando...</div>
  }
  return (
    <>
      <PerfilHero perfilRestaurante={restaurante} />
      <RestaurantList opcoesPratos={pratos} />
      <Footer />
    </>
  )
}
export default Perfil
