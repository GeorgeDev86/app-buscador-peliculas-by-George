import React from 'react'
import ReactDOM from 'react-dom/client'
import { BuscadorPeliculas } from './BuscadorPeliculas'
import './styles/movieSearch.css'


BuscadorPeliculas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BuscadorPeliculas />
  </React.StrictMode>,
)
