import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import appLogo from './../assets/virusLogo.svg'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
  <nav className="navbar">
	<div className="container">
		<div><a href="/guest"><img src={appLogo} className="logo" alt="VV Logo"/> </a></div>
		<div className={`nav-elements  ${showNavbar && 'active'}`}>
			<ul>
				<li> <a href={`/appointment`}>Appointments</a> </li>
				<li> <a href={`/validation`}>Validate Visitors</a> </li>
				<li> <a href={`/visitor`}>Register a Visitor</a> </li>
				<li> <a href={`/conditions`}>Add a Condition</a> </li>
				<li> <a href={`/location`}>Add a Location</a> </li>
				<li> <a href={`/signup`}>Sign Up</a> </li>
				<li> <a href={`/login`}>Login</a> </li>
				<li> <a href={`/`}>Log Out</a> </li>
			</ul>
		</div>
	</div>
  </nav>
  );
}
export default Navbar;