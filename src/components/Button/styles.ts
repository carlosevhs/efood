import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${cores.laranja};
  background-color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
`
export const ButtonLink = styled(Link)`
  color: ${cores.laranja};
  background-color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  padding: 4px;
`
