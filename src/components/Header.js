import React, { Component } from 'react'
import '../style/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <span className="option">
            <a href="#">&#8249;</a>
            <a href="#">&#8250;</a>
          </span>
          <span className="logo">
            <div className="logo-background">
              <p>Behance API</p>
            </div>
          </span>
          <span className="link">
            <a href="#">
              <div className="background"></div>
              <p>Projects</p>
            </a>
            <a href="#">
              <div className="background"></div>
              <p>Collections</p>
            </a>
            <a href="#">
              <div className="background"></div>
              <p>Users</p>
            </a>
            <a href="#">
              <div className="background"></div>
              <p>Learn</p>
            </a>
          </span>
        </nav>
      </div>
    )
  }
}
