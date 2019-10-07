import React, {useState} from 'react';
import clsx from 'clsx';
import "./header.scss"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="header-layout header-theme">
      <div className="container">
        <div className="logo-block">
          <a href="/">          
            <img src="/logo192.png" alt="Film it"
              className="logo-img" />
            <span className="logo-text">film it</span>
          </a>
        </div>        
        <nav className={clsx('primary-menu', {'open':openMenu})} >
          <ul className="left-menu">
            <li>
              <a href="/home">Home</a>
              <span className="sub-toggle"></span>
            </li>
            <li>
              <a href="/movies">Movies</a>
              <span className="sub-toggle"></span>
            </li>
            <li>
              <a href="tvshows">TV Shows</a>
              <span className="sub-toggle"></span>
            </li>
            <li>
              <a href="/celebrities">Celebrities</a>
              <span className="sub-toggle"></span>
            </li>
            <li>
              <a href="/news">News</a>
              <span className="sub-toggle"></span>
            </li>
          </ul>          
          <ul className="right-menu">
            <li className="login-btn">
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
        <button className="collapse-button" onClick={() => setOpenMenu(!openMenu)}>toogle menu</button>
      </div>
    </header>
  )
}

export default Header