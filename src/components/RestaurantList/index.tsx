import { AdicionarAoCarrinho, List, Modal, ModalContent } from './styles'

import PerfilProduct from '../PerfilProduct'
import OpcoesRestaurant from '../../models/Opcoesrestaurants'
import pizza from '../../assets/images/pizza.png'
import fechar from '../../assets/images/fechar.png'

export type Props = {
  opcoesRestaurants: OpcoesRestaurant[]
}

const RestaurantList = ({ opcoesRestaurants }: Props) => (
  <>
    <div className="container">
      <List>
        {opcoesRestaurants.map((restaurant) => (
          <PerfilProduct
            key={restaurant.id}
            descricao={restaurant.descricao}
            imagem={restaurant.image}
            titulo={restaurant.titulo}
            link={restaurant.link}
          />
        ))}
      </List>
    </div>
    {/* <Modal>
      <ModalContent className="container">
        <img src={pizza} alt="" />
        <div>
          <img className="botao-fechar" src={fechar} alt="" />
          <h4> pizza marguerita</h4>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </p>
          <p>serve 2 a 3 pessoas</p>
          <AdicionarAoCarrinho>
            Adiconar ao carrinho - R$60,90
          </AdicionarAoCarrinho>
        </div>
      </ModalContent>
    </Modal> */}
  </>
)

export default RestaurantList
