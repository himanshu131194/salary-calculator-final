import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import fetch from 'fetch';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  // getData(){
  //    fetch.get('/salary/test').then((res)=>{
  //       console.log(res);
  //    });
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className="Salary-content">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div className="App-intro">
            <div className="form-group">
              <label>Designation:
                <input type="text" name="designation" className="form-control"/>
              </label>
            </div>
            <div className="form-group">
              <label>Location:
                <input type="text" name="location" className="form-control"/>
              </label>
            </div>
            <div className="form-group">
              <label>Experience:
                <select name="experience" className="form-control">
                  <option value="1" default>0-3</option>
                  <option value="2">3-6</option>
                  <option value="3">6-10</option>
                  <option value="4">10+</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <footer className="App-footer">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
