class Restaurant {
  descricao: string
  image: string
  infos: string[]
  nota: string
  titulo: string
  id: number
  link: string

  constructor(
    descricao: string,
    image: string,
    infos: string[],
    nota: string,
    titulo: string,
    id: number,
    link: string
  ) {
    this.id = id
    this.descricao = descricao
    this.image = image
    this.infos = infos
    this.nota = nota
    this.titulo = titulo
    this.link = link
  }
}

export default Restaurant
