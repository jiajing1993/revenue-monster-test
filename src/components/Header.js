import React from 'react'
import '../style/Header.css';

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <span className="option">
          <a href="https://www.behance.net/">&#8249;</a>
          <a href="https://www.behance.net/">&#8250;</a>
        </span>
        <span className="logo">
          <div className="logo-background">
            <p>Behanapi</p>
          </div>
        </span>
        <span className="link">
          <Link to="/project/42496061">
            <div className="background"></div>
            <p>Projects</p>
          </Link>
          <Link to="/collections/">
            <div className="background"></div>
            <p>Collections</p>
            </Link>
          <Link to="/user/50001">
            <div className="background"></div>
            <p>Users</p>
          </Link>
        </span>
      </nav>
    </div>
  )
}

export default Header