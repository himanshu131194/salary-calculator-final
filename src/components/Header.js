import React, { Component } from 'react';
import teamlease from '../TeamLease-white.png';
import down_arrow from '../arrow-down.png';
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
            <div className="logged-in-success inline-block vertical-align-middle header-links float-right text-center profile-dropdown display-none margin-top-15 padding-left-4-percent header_links">

            </div>
            <div className="vertical-align-middle header-links logged-in-unsuccess signup-login float-right margin_right_0 padding_right_0">
    					<div className="emp-zone-head">
    						<a className=" cursor-pointer font_14" href="http://employer.teamlease.com">Employer Zone</a>
    						<span className="separator color-fff register-separator register-separation">|</span>
    						<div className="inline-block dropdown">
    							<a className="cursor-pointer dropdown-toggle padding_bottom_28" data-toggle="dropdown" data-hover="dropdown" href="/jobs">Services
    					         <span>
    					            	<img className="down_arrow" src={down_arrow} />
                      </span>
    						  </a>
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
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
