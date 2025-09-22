import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const DetailMoviePage = () => {

  const [movie, setMovie] = useState([]);
  const {id} =useParams()

  const fetchMovie = () => {

    axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
      setMovie(resp.data)
    })

  }

  useEffect(fetchMovie, []);


  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className='text-center py-3'>{movie.title}</h1>
            </div>
            <div className="col-6">
              <img src={movie.image} alt="" className="movie-img"/>
            </div>
            <div className="col-6">
              <p>Genere: {movie.genre}</p>
              <p>Anno di uscita: {movie.release_year}</p>
              <p>Diretto da: {movie.director}</p>
            </div>
        </div>
        <div className="row">

        </div>
      </div>
    </div>
  )
}

export default DetailMoviePage
