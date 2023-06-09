import { Link } from 'react-router-dom'
import { useContext } from 'react'

// styles
import './Navbar.css'
import Searchbar from './Searchbar'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
  const {color} = useContext(ThemeContext)
  return (
    <div className="navbar" style={{background: color}}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}
