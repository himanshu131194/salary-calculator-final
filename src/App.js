import React, { Component } from 'react';
import axios from 'axios';
import first from './images/first.svg';
import device from './images/devices.svg';
import discussion from './images/discussion.svg';
import computer from './images/computer.svg';
import computer_white from './images/computer_white.svg';
import background from './images/Back-image.jpg';
import './App.css';
import './search-filter.css';
import Header from './components/Header';
import Footer from './components/Footer';


var topStyle={
  width: "100%",
  backgroundSize: 'cover',
  backgroundImage: `url(${background})`
};

class App extends Component {

  constructor(props){
    super(props);
    this.state={ salRange:null, cities: null, designations: null }
    if(!this.state.cities){
        axios.get('/site/reactsalarycalculator')
             .then(result=>{
                   this.setState({ cities: result.data['cities'], designations: result.data['designations'] } )
                   let ele = document.getElementById('designation'),
                       designations = this.state.designations;
                   this.autocompleteInput(ele, designations)
              })
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  autocompleteInput(inp, arr) {
    var currentFocus;

    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i]['designation_name'].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i]['designation_name'].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i]['designation_name'].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i]['designation_name'] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1)
            if (x) x[currentFocus].click();
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x){
        for (var i = 0; i < x.length; i++)
        x[i].classList.remove("autocomplete-active");
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp)
           x[i].parentNode.removeChild(x[i]);
        }
    }

    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });

  }

  defaultSalaryRangeBox(){
    return (
       <div className="defaultResultBox">
         <div className="result_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusm</div>
         <div className="result_content">
           <img className="result_img" alt="graph" src={computer} />
           <p className="result_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor</p>
         </div>
       </div>
    )
  }

  resultSalaryRangeBox(){
    let range = this.state.salRange;
    return (
       <div className="newResultBox">
         <div className="newResult_content">
           <img className="newResult_img" alt="graph" src={computer_white} />
           <div className="right_content">
             <div className="newResult_title">Your Estimated Salary</div>
             <p className="newResult_text">{range}</p>
           </div>
         </div>
       </div>
    )
  }

  onFormSubmit(e){
    e.preventDefault();
    let loc = e.target.getElementsByClassName('location')[0].value;
    let desig = e.target.getElementsByClassName('designation')[0].value;
    let exp = e.target.getElementsByClassName('experience')[0].value;
    const formData = new FormData();
          formData.append('city_name', loc);
          formData.append('designation_name', desig);
          formData.append('work_experience', exp);
    axios.post('/site/reactsalarycalculator', formData)
         .then(result=>{
           var range= "Rs "+result.data.min_salary+" - Rs "+result.data.max_salary;
           this.setState({ salRange : range });
         })
  }

   updateSalaryRange(){
       let range = this.state.salRange;
       if(range){
         return this.resultSalaryRangeBox();
       }else{
          return this.defaultSalaryRangeBox();
       }
  }

  getCities(){
     let cities = null;
     if(this.state.cities){
        cities = this.state.cities.map((res)=>{
              return (
                <option key={res.id} value={res.id}>{res.city}</option>
              )
         })
     }
     return cities;
  }

  getDesignation(){
    let desig = null;
    if(this.state.designations){
       desig = this.state.designations.map((res)=>{
             return (
               <option key={res.id} value={res.id}>{res.designation_name}</option>
             )
        })
    }
    return desig;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Salary-content">
          <div className="top_content" style={ topStyle } >
            <h2 className="App-title">How much are your skills worth?</h2>
            <p className="first_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat</p>
            <p className="second_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod</p>
            <div className="App-intro">
              <form className="" onSubmit={this.onFormSubmit}>
                <div className="custom_form">
                <div className="form-group">
                    <div className="autocomplete">
                       <input className="form-control designation" name="designation" id="designation" placeholder="Designation" autoComplete="off"/>
                    </div>
                </div>
                <div className="form-group">
                    <select className="form-control location" name="location" >
                      <option value="">Select Location</option>
                      {this.getCities()}
                    </select>
                </div>
                <div className="form-group">
                   <select name="experience" className="form-control experience" placeholder="Experience"  >
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
        <div className="result_box">{this.updateSalaryRange()}</div>
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
