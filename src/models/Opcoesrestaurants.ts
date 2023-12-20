class OpcoesRestaurant {
  descricao: string
  image: string
  titulo: string
  id: number
  link: string

  constructor(
    descricao: string,
    image: string,
    titulo: string,
    id: number,
    link: string
  ) {
    this.id = id
    this.descricao = descricao
    this.image = image
    this.titulo = titulo
    this.link = link
  }
}

export default OpcoesRestaurant
