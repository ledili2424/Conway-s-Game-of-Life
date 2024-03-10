import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Intro</Link>
            </li>
            <li>
                <Link to="/game">Game</Link>
            </li>
            <li>
                <Link to="/info">Dev Info</Link>
            </li>
        </ul>
    </nav>
  )
}
