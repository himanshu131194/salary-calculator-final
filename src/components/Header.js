import React, { Component } from 'react';
import teamlease from '../images/TeamLease-white.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="header-section">
          <div className="center-align">
            <div className="main-logo inline-block">
              <a href="https://www.teamlease.com" onClick={(e)=>{ e.preventDefault(); window.open("https://www.teamlease.com", '_blank'); }}>
                <img title="Teamlease -No.1 website" alt="Teamlease logo - No.1 website" src={teamlease} />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
