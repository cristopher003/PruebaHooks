import React from 'react'
import { Link, NavLink } from "react-router-dom"

export const NavBar = ({title}) => {
  return (
    <>
<nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={'/'}>
                Home
            </NavLink>
          {/* <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link> */}
        </li>
        <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={'/login'}>
                Login
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={'/about'}>
                About
            </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
