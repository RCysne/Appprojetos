import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// Quando o BrowserRouter envolve o <App/>, ele habilita os poderes do react-router. O BrowserRouter é utilizado em aplicações mais dinâmicas. O HashRouter é utilizado em aplicações mais estáticas, mas tudo depende da aplicação e necessidade

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
