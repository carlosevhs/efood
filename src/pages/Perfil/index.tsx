import { useParams } from 'react-router-dom'

import RestaurantList from '../../components/RestaurantList'
import PerfilHero from '../../components/PerfilHero'
import Footer from '../../components/Footer'
import { useGetPerfilQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetPerfilQuery(id || '')

  if (!restaurante) {
    return <div>Carregando...</div>
  }
  return (
    <>
      <PerfilHero perfilRestaurante={restaurante} />
      <RestaurantList opcoesPratos={restaurante} />
      <Footer />
    </>
  )
}
export default Perfil
