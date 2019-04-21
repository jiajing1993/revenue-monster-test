import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="sidebar-container">
            <img src="https://firstblood.io/pages/wp-content/uploads/2018/07/dota-2-hero-guide-970x570.jpg" alt=""/>
            <p className="name">Earth Shaker</p>
            <p className="description">
              Raigor Stonehoof, the Earthshaker, is a melee strength hero with several area of effect (AoE) disables, commonly played as a ganker or initiator.
            </p>
            <div className="actions">
              <div className="like"></div>
              <div className="seen"></div>
              <div className="comment"></div>
            </div>
            <a href="#" className="view-more">Lock In</a>
          </div>
        </div>
        <div className="card-list">        
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    );
  }
}

export default App;
