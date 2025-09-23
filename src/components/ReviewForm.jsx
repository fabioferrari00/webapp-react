import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const ReviewForm = ({movieId, reloadReviews}) => {

    const url = `http://localhost:3000/api/movies/${movieId}/reviews`;

    const [formData, setFormData] = useState({
        text: "",
        vote: "",
        name: ""
    })

    const setFieldValue = (e) => {
        const {name, value} = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(url, formData, {headers: {"Content-Type" : "application/json"}}).then((resp) => {
            setFormData({
                name: "",
                vote: "",
                text: ""
            })
            reloadReviews();
        })
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-12">
                <h3 className='text-center'>Aggiungi recensione</h3>
            </div>
        </div>
        <div className="row">
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="" className='form-label'>Nome</label>
                    <input type="text" name="name" id="name" placeholder='Nome' className='form-control' value={formData.name} onChange={setFieldValue}/>
                </div>
                <div className="my-3">
                    <label htmlFor="" className='form-label'>Voto</label>
                    <input type="number" name="vote" id="vote" placeholder='Voto' min="0" max="5" className='form-control' value={formData.vote} onChange={setFieldValue}/>
                </div>
                <div className="my-3">
                    <label htmlFor="" className='form-label'>Recensione</label>
                    <input type="text" name="text" id="text" placeholder='Scrivi la tua recensione' className='form-control' value={formData.text} onChange={setFieldValue}/>
                </div>
                <div className="my-3">
                    <button className='btn btn-success'>Salva</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ReviewForm
