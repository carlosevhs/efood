import { Provider } from 'react-redux'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import { store } from './store'
import Cart from './components/Cart'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container"></div>
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
