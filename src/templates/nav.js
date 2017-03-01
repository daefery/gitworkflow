import React from 'react'
import { Link, IndexLink } from 'react-router'

const ACTIVE = { color: 'red' }
const Nav = ({ children }) => (
  <div>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <IndexLink className="navbar-brand" activeStyle={ACTIVE} to="/">FERDE</IndexLink>
      </div>
      <ul className="nav navbar-nav">
        <li><Link to="/users" activeStyle={ACTIVE}>User</Link></li>
        <li><Link to="/about" activeStyle={ACTIVE}>About</Link></li>
        <li><Link to="/contact" activeStyle={ACTIVE}>Contact</Link></li>
      </ul>
    </div>
  </nav>
  <div className="container">
    {children}
  </div>
  </div>
)

export default Nav
