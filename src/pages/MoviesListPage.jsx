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
                    const {id, title, image, genre, release_year} = movie; 
                    return(
                        <div className="col-12 col-md-6 col-lg-4" key={id}>
                            <div className="card-movie">
                             <Link to={`/movies/${id}`}>
                                <img src={image} className='movie-cover' alt="" />
                                <div className="overlay">
                                    <h2>{title}</h2>
                                    <p>{genre}</p>
                                    <p>{release_year}</p>
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
