import React, { Component } from 'react';
import facebook from '../images/facebook-logo.png';
import google from '../images/google-plus.png';
import linkedin from '../images/linkedin-logo.png';
import twitter from '../images/twitter-logo.png';
import youtube from '../images/youtube-logo.png';
import googleplay from '../images/GooglePlay.png';
import appr from '../images/apprentices.jpg';
import fw from '../images/freshersworld.jpg';
import schoolguru from '../images/school_guru.jpg';
import teamlease from '../images/teamlease-skills.jpg';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <div className="footer-bottom-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
				    <div className="center-align">
  						<div className="inline-block padding_top_15 padding_bottom_15">
  							<div className="fotter-bottom-links">
  								<div className="contact margin_bottom_12">Corporate Website<a className="footer-hover associate_login float-right" href="https://tlconnect.teamlease.com/SecureLogin">Associate Login</a> </div>
  								<a className="footer-hover color-777576 " href="https://qa.teamleasegroup.com">TeamLeaseGroup.com</a>
  								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
  								<a className="footer-hover color-777576 " href="https://qa.teamleasegroup.com/about-teamlease">About Us</a>
  								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
  								<a className="footer-hover color-777576 " href="https://qa.teamleasegroup.com/temporary-staffing">Services</a>
  								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
  								<a className="footer-hover color-777576 " href="https://qa.teamleasegroup.com/resources/reports/18">Resources</a>
  								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
  								<a className="footer-hover color-777576 " href="https://qa.teamleasegroup.com/node/983">Media</a>
  								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
  								<a className="footer-hover color-777576 " href="https://qa.teamleasegroup.com/overview">Investors</a>
  								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
  								<a className="footer-hover color-777576 " href="https://qa.teamleasegroup.com/blogs">Blog</a>
  								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
  								<a className="footer-hover color-777576 " href="https://qa.teamleasegroup.com/current-openings">Work with Us</a>
  							</div>
  							<div className="fotter-bottom-links margin_top_30 width_340">
  								<div className="contact margin_bottom_12">Information</div>
  								<a className="footer-hover color-777576 " href="/contact-us">Contact Us</a>
  								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
  								<a className="footer-hover color-777576 " href="/business-enquiry?tlfootr">Business Enquiries</a>
  								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
  								<a className="footer-hover color-777576 " href="http://dev.teamleasejobs.com/faq">FAQ</a>
  								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
  								<a className="footer-hover color-777576 " href="https://qa.teamleasegroup.com/blogs">Blog</a>
  							</div>
  						</div>

					    <div className="inline-block social_icons follow_us_block">
						      <div className="contact">Follow Us</div>
      						<div className="inline-block social-icon">
      							<a href="https://www.linkedin.com/company/teamlease" data-toggle="toggle" alt="Get in Touch with TeamLease in LinkedIn" title="Get in Touch with TeamLease in LinkedIn">
      								<img src={linkedin} className="social_img" alt="linkedin" />
      							</a>
      						</div>
      						<div className="inline-block social-icon">
      							<a href="https://www.facebook.com/teamleaseservices/" data-toggle="toggle" alt="Get in Touch with TeamLease in Facebook" title="Get in Touch with TeamLease in Facebook">
      								<img src={facebook} className="social_img" alt="facebook" />
      							</a>
      						</div>
      						<div className="inline-block social-icon">
      							<a href="https://www.youtube.com/teamlease" alt="Get in Touch with TeamLease in Youtube" data-toggle="toggle" title="Get in Touch with TeamLease in Youtube">
      							   <img src={youtube} className="social_img" alt="youtube" />
      							</a>
      						</div>
      						<div className="inline-block social-icon">
      							<a href="https://plus.google.com/+teamlease" alt="Get in Touch with TeamLease in +Google" data-toggle="toggle" title="Get in Touch with TeamLease in +Google">
      								<img src={google} className="social_img" alt="google" />
      							</a>
      						</div>
      						<div className="inline-block social-icon">
      							<a href="https://twitter.com/teamlease" alt="Get in Touch with TeamLease in Twitter" data-toggle="toggle" title="Get in Touch with TeamLease in Twitter">
      								<img src={twitter} className="social_img" alt="twitter" />
      							</a>
      						</div>
      						<div className="contact margin_top_10">Easy Job access on the go</div>
      						<div className="inline-block social-icon gplay">
      							<a href="https://play.google.com/store/apps/details?id=com.teamlease.jobs&amp;referrer=utm_source%3Dfooter%26utm_medium%3Dweb%26utm_campaign%3Dweb" data-toggle="toggle" title="Try our App on Google Play Store">
      								<img src={googleplay} className="social_img gplay" alt="twitter" />
      							</a>
      						</div>
			         </div>
						</div>
		     </div>

         <div className="footer-last-section">
 						<div className="text-center">
     						<div className="inline-block font-12 pad_bottom_20 pad_top_0">
       							<div className="color-777576  margin-top-15">Copyright © 2018 TeamLease. All rights reserved</div>
       							<div className="color-777576 margin_top_8">ISO 27001 Information Technology Security Management System. Certified by British Standards</div>
       							<div className="font-12 fotter-bottom-links margin_bottom_0 margin_top_20">
         								<a className="footer-hover color-777576" href="/terms-conditions" target="_blank">Terms &amp; Conditions</a>
         								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
         								<a className="footer-hover color-777576 " href="/privacy-policy" target="_blank">Privacy Policy</a>
         								<span className="padding-right-10 padding-left-10 color-17284e">|</span>
         								<a className="footer-hover color-777576 " href="/sitemap" target="_blank">Sitemap</a>
       							</div>
     						</div>
 						</div>
 		    </div>

        <div className="client_logos">
            <div className="center-align text-center margin_top_20 margin_bottom_20">
              <div className="inline-block color-777576 margin_right_20"><div className="site_text">Partner Sites</div></div>
              <div className="inline-block companies-logo-footer">
                  <a href="https://www.freshersworld.com" target="_blank">
                      <img alt="freshersworld.com" title="Freshersworld" src={fw} />
                  </a>
              </div>
              <div className="inline-block companies-logo-footer">
                  <a href="http://www.teamleaseuniversity.ac.in" target="_blank">
                      <img alt="teamleaseuniversity.ac.in" title="Teamlease Skills" src={teamlease} />
                  </a>
              </div>
              <div className="inline-block companies-logo-footer">
                  <a href="https://www.apprentices.in" target="_blank">
                      <img alt="apprentices.in" title="Apprentices" src={appr} />
                  </a>
              </div>
              <div className="inline-block companies-logo-footer">
                  <a href="http://www.schoolguru.in" target="_blank">
                      <img alt="schoolguru.in" title="Schoolguru" src={schoolguru} />
                  </a>
              </div>
            </div>
        </div>

        <div className="mob_alternate">
            <div className="nav-footer-corp margin_bottom_20">
              <a href="https://tlconnect.teamlease.com/SecureLogin" class="text-decoration corp-text">
                Associate Login - Login Now
              </a>
            </div>
            <div className="nav-footer-corp">Corporate Website -
							<a href="https://www.teamleasegroup.com" className="text-decoration corp-text">
								TeamLeaseGroup.com
							</a>
						</div>
            <div className="copyright-text font-12">Copyright © 2018 TeamLease. All rights reserved</div>
        </div>

      </footer>
    );
  }
}

export default Footer;
