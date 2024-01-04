import { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#E66767',
  branco: '#FFF',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1023px',
  tablet: '767px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.begeClaro};
    color: ${cores.laranja};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 90%
    }
  }

`
