import { useState } from "react"
import "./styles/movieSearch.css"

export const BuscadorPeliculas = () => {

const urlBase='https://api.themoviedb.org/3/search/movie'
const API_KEY='744d78c8df4f56fdf0d72df1ed1f3aca'

 const [busqueda, setBusqueda] = useState('')
 const [peliculas, setPeliculas] = useState([])

 const handleInputChange =(e)=>{
    setBusqueda(e.target.value)
 }

 const handleSubmit=(e)=>{
    e.preventDefault()
    fetchPeliculas()
 }

 const fetchPeliculas= async()=>{
    try{
        const response= await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
         const data=await response.json()
         setPeliculas(data.results)

    }catch(error){
        console.error('Ocurrio un error:',error)
    }
 }


  return (
    <div className="container">
        <h1 className="title">Buscador de Peliculas by George</h1>

        <form onSubmit={handleSubmit}>
            <input 
                type="text"  
                placeholder="Escribe la Pelicula a buscar"
                value={busqueda}
                onChange={handleInputChange}
                />
            <button type="submit" className="search-button">Buscar</button>
        </form> 

        <div className="movie-list">
            {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                <h2>{pelicula.title}</h2>
                <p>{pelicula.overview}</p>
            </div>
            ))}
        </div>    
    </div>
  )
}
