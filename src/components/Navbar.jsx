import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
<NavLink to="/" className='navtext'>Home</NavLink>
<NavLink to="/Aboutus"className='navtext'>About</NavLink>
<NavLink to="/Contacts"className='navtext'>Contact us </NavLink>

</div>
)
}

export default Navbar