import React, { Component } from 'react'
import {Link, useResolvedPath, useMatch} from 'react-router-dom'


//links us to router dom
export default class Navbar extends Component {

  render() {
    return (
      <nav className="nav">
        <Link to="/" className="site-title">Hearty Helpers</Link>
        <ul>
            <CustomLink to="/donate">Donate</CustomLink>
            <CustomLink to="/receive">Receive</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            
        </ul>
      </nav>
    )
  }
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end:true})
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}
