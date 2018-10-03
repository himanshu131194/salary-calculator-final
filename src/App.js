import React, { Component } from 'react';
import logo from './logo.svg';
import first from './first.svg';
import device from './devices.svg';
import discussion from './discussion.svg';
import computer from './computer.svg';
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
        <Header/>
        <div className="Salary-content">
          <div className="top_content">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">How much are your skills worth?</h1>
            <p className="first_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat</p>
            <p className="second_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod</p>
            <div className="App-intro">
              <form className="">
                <div className="custom_form">
                <div className="form-group">
                    <input type="text" name="designation" className="form-control" placeholder="Designation"/>
                </div>
                <div className="form-group">
                    <input type="text" name="location" className="form-control" placeholder="Location"/>
                </div>
                <div className="form-group">
                    <select name="experience" className="form-control" placeholder="Experience">
                      <option value="" default>Experience in Years</option>
                      <option value="1">0-3</option>
                      <option value="2">3-6</option>
                      <option value="3">6-10</option>
                      <option value="4">10+</option>
                    </select>
              </div>
              <div className="form-group">
                  <button className="submit form-control" name="submit">Estimate Salary</button>
              </div>
              </div>
            </form>
          </div>
        </div>
        <div className="result_box">
          <div className="result_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
          <div className="result_content">
            <img className="result_img" alt="graph" src={computer} />
            <p className="result_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor</p>
          </div>
        </div>
        <div className="bottom_content">
          <div className="content_box">
            <div className="box_head">
              <div className="box_title">Lorem Ipsum</div>
              <img src={first} className="box_img" alt="first" />
            </div>
            <div className="box_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
            </div>
          </div>
          <div className="content_box">
            <div className="box_head">
              <div className="box_title">Lorem Ipsum</div>
              <img src={device} className="box_img" alt="devices" />
            </div>
            <div className="box_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
            </div>
          </div>
          <div className="content_box">
            <div className="box_head">
              <div className="box_title">Lorem Ipsum</div>
              <img src={discussion} className="box_img" alt="discussion" />
            </div>
            <div className="box_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    );
  }
}

export default App;
