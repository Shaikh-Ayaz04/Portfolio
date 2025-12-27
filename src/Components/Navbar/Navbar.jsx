import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import underline from '../../Assets/nav_underline.svg'
import { Link } from 'react-scroll'
import menu_open from '../../Assets/menu_open.svg'
import menu_close from '../../Assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('home')
  const menuRef =useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open' />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />
        <li>
          <Link
            to="home"
            smooth={true}
            duration={800}
            onClick={() => setMenu('home')}
          >
            Home
          </Link>
          {menu === 'home' && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-80}
            onClick={() => setMenu('about')}
          >
            About Me
          </Link>
          {menu === 'about' && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="services"
            smooth={true}
            duration={800}
            offset={-80}
            onClick={() => setMenu('services')}
          >
            Education
          </Link>
          {menu === 'services' && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="work"
            smooth={true}
            duration={800}
            offset={-80}
            onClick={() => setMenu('work')}
          >
            Projects
          </Link>
          {menu === 'work' && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
            onClick={() => setMenu('contact')}
          >
            Contact
          </Link>
          {menu === 'contact' && <img src={underline} alt="" />}
        </li>
      </ul>

      <div className="nav-connect">
        <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
            onClick={() => setMenu('contact')}
          >
            Connect With Me
          </Link>
        </div>
    </div>
  )
}

export default Navbar
