import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const DetailMoviePage = () => {

  const {id} =useParams()
  const [movie, setMovie] = useState({});

  const fetchMovie = () => {

    axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
      console.log(resp.data)
      setMovie(resp.data)
    }).catch((err) => console.log(err));

  }

  useEffect(fetchMovie, []);


  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className='text-center py-3'>{movie.title}</h1>
            </div>
            <div className="col-6 bg-black">
              <img src={movie.image} alt="" className="movie-img p-3"/>
            </div>
            <div className="col-6 bg-black text-red py-3">
              <p>Genere: {movie.genre}</p>
              <p>Anno di uscita: {movie.release_year}</p>
              <p>Diretto da: {movie.director}</p>
              <p>Voto: {movie.average_vote}/5</p>
            </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3">
            <div className="reviews">
               {movie.reviews?.map((review) => {
                return (
                  <div class="card w-75 mb-3">
                    <div class="card-body">
                      <h5 class="card-title">{review.name}</h5>
                      <p class="card-text">{review.text}</p>
                      <p>{review.vote}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailMoviePage
