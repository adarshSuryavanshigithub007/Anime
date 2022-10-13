import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
  <header>
  <div className="container">
        <div className="inner-content">
            <div className="brand">
                <Link to="/">ANIME APP</Link>
            </div>
            <ul className="nav-List">
                <li>
                    <Link to="/">AnimeList</Link>
                </li>
                <li>
                    <Link to="/watchList">WatchList</Link>
                </li>
                <li>
                    <Link to="/Details">Details</Link>
                </li>
               
            </ul>
        </div>
    </div>
  </header>
  )
}

export default Header