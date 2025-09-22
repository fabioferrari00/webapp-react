import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MoviesListPage = () => {

    const [movies,setMovies] = useState([]);

    //funzione che recupera i film
    const fetchMovies = () =>{
        axios.get("http://localhost:3000/api/movies").then((resp) => {
            setMovies(resp.data);
        });
    }

    //uso lo useEffect per rcuperare i film
    useEffect(fetchMovies,[])

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center my-3'>Movies List</h1>
                </div>
            </div>
            <div className="row gy-3">
                {movies.map(movie => {
                    return(
                        <div className="col-12 col-md-6 col-lg-4" >
                            <div className="card-movie" key={movie.id}>
                             <Link to={`/movies/${movie.id}`}>
                                <img src={movie.image} className='movie-cover' alt="" />
                                <div className="overlay">
                                    <h2>{movie.title}</h2>
                                    <p>{movie.genre}</p>
                                    <p>{movie.release_year}</p>
                                </div>
                            </Link> 
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    </div>
  )
}

export default MoviesListPage
