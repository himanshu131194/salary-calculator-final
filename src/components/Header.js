import React, { Component } from 'react';
import teamlease from '../images/TeamLease-white.png';
import user from '../images/user_white.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="header-section">
          <div className="center-align">
            <div className="main-logo inline-block">
              <a href="http://dev.teamleasejobs.com">
                <img title="Teamlease -No.1 website" alt="Teamlease logo - No.1 website" src={teamlease} />
              </a>
            </div>
            <div className="vertical-align-middle header-links logged-in-unsuccess signup-login float-right margin_right_0 padding_right_0">
    					<div className="emp-zone-head">
    						<a className=" cursor-pointer font_14" href="http://employer.teamlease.com">Employer Zone</a>
    						<span className="separator color-fff register-separator register-separation">|</span>
    						<div className="inline-block dropdown">
    							<a className="cursor-pointer dropdown-toggle padding_bottom_28" data-toggle="dropdown" data-hover="dropdown" href="/jobs">Services</a>
    						  <ul className="dropdown-menu service-dropdown-menu">
    						  	<span className="triangle-with-shadow up triangle_left_profile_top"></span>
    						  	<li className="dropdown">
    							      <a className="cursor-pointer services_link" href="http://employer.teamlease.com/temporary-staffing">Temporary Staffing</a>
    							      <a className="cursor-pointer services_link" href="http://employer.teamlease.com/it-staffing">IT Staffing</a>
    							      <a className="cursor-pointer services_link" href="http://evolve-india.com">Telecom Staffing &amp; Services</a>
    							      <a className="cursor-pointer services_link" href="http://employer.teamlease.com/payroll-processing">Payroll Processing</a>
    							      <a className="cursor-pointer services_link" href="http://employer.teamlease.com/recruitment-services">Recruitment Services</a>
    							      <a className="cursor-pointer services_link" href="http://employer.teamlease.com/regulatory-compliance-services">Regulatory Compliance Services</a>
    							      <a className="cursor-pointer services_link" href="http://employer.teamlease.com/learning-services">Learning Services</a>
    							      <a className="cursor-pointer services_link" href="http://employer.teamlease.com/apprenticeship-program-netap">Apprenticeship Program (NETAP)</a>
    							      <a className="cursor-pointer services_link" href="http://employer.teamlease.com/teamlease-skills-university">TeamLease Skills University</a>
    							  </li>
      							<div className="business_enq_div">
      						    	<a className="teamlease-button-color business_enq" href="https://www.teamlease.com/business-enquiry?src=headercontact">Business Enquiry</a>
      						  </div>
    						 </ul>
    				   </div>
    			   </div>
				    </div>
            <div className="inline-block vertical-align-middle header-links logged-in-unsuccess signup-login float-right">
              <a className="cursor-pointer register-header" data-toggle="modal" data-target="#experience-fresher-modal">
                <span>
                  <img className="user_icon" alt="user" src={user} />
                </span>Register
              </a>
              <span className="separator register-separator"></span>
              <a className=" cursor-pointer margin-left-5 login-header-link font_14" data-toggle="modal" data-target="#login-modal">Login</a>
            </div>
            <div className="search-block">
              <div className="search-block-inputs inline-block">
                <form className="advance_search_form basic_search" action="" method="post">
                    <input type="text" className="search-keyword-input search-inputs border-dcdcdc advance-search-keyword ui-autocomplete-input height_32" name="search-keyword" placeholder="Skills, Designations" id="search-keyword" autoComplete="off" />
                    <input type="text" name="search-location" className="search-location-input search-inputs border-dcdcdc advance-search-location ui-autocomplete-input height_32" placeholder="Location" id="search-location" autoComplete="off" />
                    <select className="search-experience-input search-inputs border-dcdcdc select2-hidden-accessible height_32" name="search-experience" placeholder="Experience" id="search-experience" tabIndex="-1" aria-hidden="true">
                          <option value="" hidden="">Experience</option>
                          <option value="0">Freshers</option>
                          <option value="0.5">0.5(6months) </option>
                          <option value="1">1(year)</option>
                          <option value="1.5">1.5</option>
                          <option value="2">2</option>
                          <option value="2.5">2.5</option>
                          <option value="3">3</option>
                          <option value="3.5">3.5</option>
                          <option value="4">4</option>
                          <option value="4.5">4.5</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="151">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="251">25</option>
                          <option value="*">25+ Years</option>
                    </select>
                    <span className="select2 select2-container select2-container--default" dir="ltr">
                      <span className="selection">
                        <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-search-experience-container">
                          <span className="select2-selection__rendered" id="select2-search-experience-container">
                            <span className="select2-selection__placeholder">Experience</span>
                          </span>
                          <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                    <input type="hidden" name="city_name" value="" className="city_name" />
                    <input type="hidden" name="city_id" value="" className="city_id" />
                    <input type="hidden" name="state_name" value="" className="state_name" />
                    <input type="hidden" name="state_id" value="" className="state_id" />
                    <input type="hidden" name="skill_name" value="" className="skill_name" />
                    <input type="hidden" name="skill_id_str" value="" className="skill_id_str" />
                    <input type="hidden" name="job_role_str_post" value="" className="job_role_str_post" />
                    <input type="hidden" name="job_category_id" value="" className="job_category_id" />
                    <input type="hidden" name="industry" value="" />
                    <input type="hidden" name="job_role" value="" />
                    <input type="hidden" name="job_type" value="" />
                    <input type="hidden" name="salary_min" value="" />
                    <input type="hidden" name="salary_max" value="" />
                    <input type="hidden" name="course_id" value="" />
                    <input type="submit" className="search-button search-form-button inline-block cursor-pointer button-color" value="SEARCH" name="search-submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
