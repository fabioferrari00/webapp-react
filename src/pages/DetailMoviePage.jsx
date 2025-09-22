import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const DetailMoviePage = () => {

  const {id} =useParams()
  const [movie, setMovie] = useState([]);

  const fetchMovie = () => {

    axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
      setMovie(resp.data)
      console.log(resp.data)
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
            <div className="col-6">
              <img src={movie.image} alt="" className="movie-img"/>
            </div>
            <div className="col-6">
              <p>Genere: {movie.genre}</p>
              <p>Anno di uscita: {movie.release_year}</p>
              <p>Diretto da: {movie.director}</p>
              <p>Voto: {movie.average_vote}/5</p>
              <div className="reviews">
                {/*movie.reviews.map((review) => {
                  return (
                    <div>
                      {review.name}
                    </div>
                  )
                })*/}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DetailMoviePage
