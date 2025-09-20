import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <h1>Header</h1>
            <ul className="list-unstyled d-flex m-3">
              <li className='me-3'><NavLink to="/">Home</NavLink></li>
              <li className='me-3'><NavLink to="/movies">Movies</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
