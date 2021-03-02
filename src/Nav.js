import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix LOGO"
        ></img>
        <img
          className="nav__avatar"
          src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
          alt="Avatar"
        ></img>
      </div>
    </div>
  )
}

export default Nav
