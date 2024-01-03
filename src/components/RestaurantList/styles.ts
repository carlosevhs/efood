import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  background-color: ${cores.begeClaro};
`
