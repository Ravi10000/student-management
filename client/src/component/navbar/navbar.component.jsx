import './navbar.styles.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <NavLink to="/"><li>students list</li></NavLink>
        <NavLink to="/register"><li >registration form</li></NavLink>
    </nav>
  )
}
export default Navbar
