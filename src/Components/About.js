import React from "react";
import '/home/uki_jf1_16/Documents/app/src/assets/css/animate.css';
import '/home/uki_jf1_16/Documents/app/src/assets/css/owl.css';
import '/home/uki_jf1_16/Documents/app/src/assets/css/flex-slider.css';
import '/home/uki_jf1_16/Documents/app/src/assets/css/fontawesome.css';
import '/home/uki_jf1_16/Documents/app/src/assets/css/templatemo-tale-seo-agency.css';
import image1 from '/home/uki_jf1_16/Documents/app/src/assets/images/video-thumb.jpg';
import image2 from '/home/uki_jf1_16/Documents/app/src/assets/images/about-us-image.jpg';
import image3 from '/home/uki_jf1_16/Documents/app/src/assets/images/logo.png';
import image4 from '/home/uki_jf1_16/Documents/app/src/assets/images/happyclient-01.jpg';



function About() {
  return (
    <>
    {/* preloader start */}
      {/* <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}

    {/* preloader end */}

    {/* Preheader start */}
    <div className="pre-header" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-9">
          <div className="left-info">
            <ul>
              <li><a href="#"><i className="fa fa-phone"></i>+000 1234 5678</a></li>
              <li><a href="#"><i className="fa fa-envelope"></i>infocompany@email.com</a></li>
              <li><a href="#"><i className="fa fa-map-marker"></i>St. London 54th Bull</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-3">
          <div className="social-icons">
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

    {/* Preheader end */}

    <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="index.html" className="logo">
                        <img src={image3} alt="assets/images/logo.png" style={{width:"112px"}}/>
                    </a>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="index.html">Services</a></li>
                      <li><a href="index.html">Projects</a></li>
                      <li className="has-sub">
                          <a href="javascript:void(0)">Pages</a>
                          <ul className="sub-menu">
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="faqs.html">FAQs</a></li>
                          </ul>
                      </li>
                      <li><a href="index.html">Infos</a></li>
                      <li><a href="index.html">Contact</a></li>
                  </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}

  <div className="page-heading">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 align-self-center">
          <div className="caption  header-text">
            <h6>SEO DIGITAL AGENCY</h6>
            <div className="line-dec"></div>
            <h4>Discover More <em>About Us</em></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore.</p>
            <div className="main-button"><a href="#">Discover More</a></div>
            <span>or</span>
            <div className="second-button"><a href="#">Check our FAQs</a></div>
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <img src={image2} alt="aboutus"/>
        </div>
      </div>
    </div>
  </div>

  <div className="video-info section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="video-thumb">
            <img src={image1} alt="video-thumb.jpg"/>
            <a href="http://youtube.com" target="_blank"><i className="fa fa-play"></i></a>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="section-heading">
            <h2>Detailed Information On What We Do &amp; Who We Are</h2>
            <div className="line-dec"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor.</p>
          </div>
          <div className="skills">
            <div className="skill-slide marketing">
              <div className="fill"></div>
              <h6>SEO Marketing</h6>
              <span>90%</span>
            </div>
            <div className="skill-slide digital">
              <div className="fill"></div>
              <h6>Digital Marketing</h6>
              <span>80%</span>
            </div>
            <div className="skill-slide media">
              <div className="fill"></div>
              <h6>Social Media Management</h6>
              <span>95%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="happy-clients section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Our 4 Steps <em>To Success</em> &amp; <span>Happy Clients</span></h2>
            <div className="line-dec"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers.</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="naccs">
            <div className="tabs">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu">
                    <div className="active"><span>Project Introduction</span></div>
                    <div><span>Work Development</span></div>
                    <div><span>Data Analysis</span></div>
                    <div className="last-item"><span>Project Finishing</span></div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <ul className="nacc">
                    <li className="active">
                      <div>
                        <div className="row">
                          <div className="col-lg-7">
                            <h4>Best CSS Templates for you</h4>
                            <div className="line-dec"></div>
                            <p>Tale is the best SEO agency website template using Bootstrap v5.2.2 CSS for your company. It is a free download provided by TemplateMo. There are 3 HTML pages, <a href="index.html">Home</a>, <a href="about.html">About</a>, and <a href="faqs.html">FAQ</a>.</p>
                            <div className="info">
                              <span>Website Design</span>
                              <span>User Interface</span>
                              <span>User Experience</span>
                              <span className="last-span">Digital Agency</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor dolor sit amet, consectetur adipicing elit, sed doers eiusmod.</p>
                          </div>
                          <div className="col-lg-5 align-self-center">
                            <img src={image4} alt="assets/images/happyclient-01.jpg"/>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="row">
                          <div className="col-lg-7">
                            <h4>Detailed Information On What We Do</h4>
                            <div className="line-dec"></div>
                            <p>You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you.</p>
                            <div className="info">
                              <span>HTML CSS</span>
                              <span>Bootstrap 5</span>
                              <span>TemplateMo</span>
                              <span className="last-span">Development</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor dolor sit amet, consectetur adipicing elit, sed doers eiusmod.</p>
                          </div>
                          <div className="col-lg-5 align-self-center">
                            <img src={image4} alt="assets/images/happyclient-01.jpg"/>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="row">
                          <div className="col-lg-7">
                            <h4>Responsive HTML CSS Templates</h4>
                            <div className="line-dec"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod kent tempor incididunt ut labore et dolore dolor.</p>
                            <div className="info">
                              <span>SEO Trend</span>
                              <span>Digital Agency</span>
                              <span>Best Template</span>
                              <span className="last-span">Development</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor dolor sit amet, consectetur adipicing elit, sed doers eiusmod.</p>
                          </div>
                          <div className="col-lg-5 align-self-center">
                            <img src={image4} alt="assets/images/happyclient-01.jpg"/>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="row">
                          <div className="col-lg-7">
                            <h4>Detailed Information about SEO Techniques</h4>
                            <div className="line-dec"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod kent tempor incididunt ut labore et dolore dolor.</p>
                            <div className="info">
                              <span>Data Analysis</span>
                              <span>SEO Trend</span>
                              <span>Templates</span>
                              <span className="last-span">Research</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor dolor sit amet, consectetur adipicing elit, sed doers eiusmod.</p>
                          </div>
                          <div className="col-lg-5 align-self-center">
                            <img src={image4} alt="assets/images/happyclient-01.jpg"/>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="cta section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h4>Are You Ready To Work &amp; Develop With Us ?<br/>Don't Hesitate &amp; Contact Us !</h4>
        </div>
        <div className="col-lg-4">
          <div className="main-button">
            <a href="#">Contact Us Now!</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div className="container">
      <div className="col-lg-12">
        <p>Copyright © 2036 <a href="#">Tale SEO Agency</a>. All rights reserved. 
        
        <br/>Design: <a href="https://templatemo.com" target="_blank">TemplateMo</a></p>
      </div>
    </div>
  </footer>
    </>
  );
}

export default About;
