'use client';

import { useEliscTemplate } from './hooks/useEliscTemplate';

export default function Home() {
  const { activeSection, mobileMenuOpen, isLoaded, handleSectionChange, toggleMobileMenu } = useEliscTemplate();

  return (
    <>
      {/* PRELOADER */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      {/* WRAPPER ALL */}
      <div className="elisc_tm_all_wrap" data-magic-cursor="show">
        
        <div className="dodo_tm_one_page_wrapper">
        
          {/* MOBILE MENU */}
          <div className="elisc_tm_topbar">
            <div className="topbar_inner">
              <div className="logo" data-type="image">
                <a className="image" href="#"><img src="/assets/images/logo/logo.png" alt="" /></a>
                <a className="text" href="#"><span>R.Elisc</span></a>
              </div>
              <div className="trigger" onClick={toggleMobileMenu}>
                <div className={`hamburger hamburger--slider ${mobileMenuOpen ? 'is-active' : ''}`}>
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`elisc_tm_mobile_menu ${mobileMenuOpen ? 'opened' : ''}`}>
            <div className="inner">
              <div className="wrapper">
                <div className="avatar">
                  <div className="image" data-img-url="/assets/images/about/1.jpg"></div>
                </div>
                <div className="menu_list">
                  <ul className="anchor_nav">
                    <li className="current"><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#news">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
                <div className="social">
                  <ul>
                    <li><a href="#"><img className="svg" src="/assets/images/svg/social/facebook.svg" alt="" /></a></li>
                    <li><a href="#"><img className="svg" src="/assets/images/svg/social/twitter.svg" alt="" /></a></li>
                    <li><a href="#"><img className="svg" src="/assets/images/svg/social/instagram.svg" alt="" /></a></li>
                    <li><a href="#"><img className="svg" src="/assets/images/svg/social/dribbble.svg" alt="" /></a></li>
                    <li><a href="#"><img className="svg" src="/assets/images/svg/social/tik-tok.svg" alt="" /></a></li>
                  </ul>
                </div>
                <div className="copyright">
                  <p>Copyright &copy; 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="elisc_tm_sidebar">
            <div className="sidebar_inner">
              <div className="author">
                <div className="image">
                  <img src="/assets/images/thumbs/1-1.jpg" alt="" />
                  <div className="main" data-img-url="/assets/images/about/1.jpg"></div>
                </div>
                <div className="name">
                  <h3><span>Robert Elisc<span className="back">Robert Elisc</span></span></h3>
                </div>
              </div>
              <div className="menu scrollable">
                <ul className="anchor_nav">
                  <li className="current"><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#service">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#news">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="copyright">
                <div className="social">
                  <ul>
                    <li><a href="#"><i className="icon-facebook-1"></i></a></li>
                    <li><a href="#"><i className="icon-twitter-1"></i></a></li>
                    <li><a href="#"><i className="icon-linkedin-1"></i></a></li>
                  </ul>
                </div>
                <div className="text">
                  <p>Copyright © 2023 Robert Elisc. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MAINPART */}
          <div className="elisc_tm_mainpart">
            <div className="mainpart_inner">

              {/* HOME */}
              <div className="elisc_tm_section animated" id="home">
                <div className="elisc_tm_home">
                  <div className="tm_content">
                    <div className="details">
                      <div className="left">
                        <div className="title">
                          <h3>Hi, I&apos;m <span className="blueColor">Elisc!</span></h3>
                          <h3>
                            <span className="cd-headline rotate-1">
                              <span className="blc">Creative</span>
                              <span className="cd-words-wrapper">
                                <b className="is-visible">Designer</b>
                                <b>Coder</b>
                                <b>Player</b>
                              </span>
                            </span>
                          </h3>
                          <h3>Based in Florida</h3>
                        </div>
                        <div className="subtitle">
                          <p>I&apos;m a Florida based web designer &amp; front‑end developer with <span className="blueColor">10+ years</span> of experience</p>
                        </div>
                        <div className="buttons">
                          <div className="elisc_tm_button">
                            <a className="anchor" href="#portfolio">Got a project?</a>
                          </div>
                          <div className="elisc_tm_button" data-style="border">
                            <a className="anchor" href="#contact">Let&apos;s talk</a>
                          </div>
                        </div>
                        <div className="info">
                          <ul>
                            <li><a href="tel:+77 022 444 05 05">+77 022 444 05 05</a></li>
                            <li><a href="mailto:support@elisc.com">support@elisc.com</a></li>
                            <li><a className="href_location" href="#">Ave Street Avenue, New York</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right">
                        <img src="/assets/images/about/2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              {/* ABOUT */}
              <div className="elisc_tm_section" id="about">
                <div className="elisc_tm_about">
                  <div className="tm_content">
                    <div className="elisc_tm_biography">
                      <div className="left">
                        <div className="title">
                          <span className="mini">- Nice to meet you!</span>
                          <h3 className="name">Robert Elisc</h3>
                          <span className="job">
                            <span className="cd-headline rotate-1">
                              <span className="blc">Web designer &amp;</span>
                              <span className="cd-words-wrapper">
                                <b className="is-visible">Developer</b>
                                <b>Coder</b>
                                <b>Player</b>
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="elisc_tm_button">
                          <a className="anchor" href="#portfolio">Got a project?</a>
                        </div>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>Hello there! My name is <span className="yellowColor">Robert Elisc</span>. I am a web designer &amp; developer, and I&apos;m very passionate and dedicated to my work.</p>
                          <p>With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                        </div>
                        <div className="info">
                          <ul>
                            <li>
                              <span>Age</span>
                              <span>25</span>
                            </li>
                            <li>
                              <span>Born In</span>
                              <span><a className="href_location" href="#">Florida, USA</a></span>
                            </li>
                            <li>
                              <span>Mail</span>
                              <span><a href="mailto:support@elisc.com">support@elisc.com</a></span>
                            </li>
                            <li>
                              <span>Phone</span>
                              <span><a href="tel:+77 022 444 05 05">+77 022 444 05 05</a></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="elisc_tm_counter">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <h3>10+</h3>
                            <span>Years of Experience</span>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <h3>50+</h3>
                            <span>Projects Completed</span>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <h3>30+</h3>
                            <span>Happy Clients</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="elisc_tm_experience">
                    <div className="tm_content">
                      <div className="elisc_tm_title">
                        <span>- Experience</span>
                        <h3>Everything about me!</h3>
                      </div>
                      <div className="list">
                        <ul>
                          <li>
                            <img className="popup_image" src="/assets/images/experience/1.jpg" alt="" />
                            <div className="list_inner">
                              <div className="short">
                                <div className="job">
                                  <span className="yellowColor">-2018 - Present</span>
                                  <h3>Web Developer</h3>
                                </div>
                                <div className="place">
                                  <span>-Envato Market</span>
                                </div>
                              </div>
                              <div className="text">
                                <p>Website development is the process of building, programming, coding and maintaining websites and web applications.</p>
                              </div>
                              <a className="elisc_tm_full_link" href="#"></a>
                              <div className="hidden_details">
                                <div className="descriptions">
                                  <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                  <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                  <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <img className="popup_image" src="/assets/images/experience/2.jpg" alt="" />
                            <div className="list_inner">
                              <div className="short">
                                <div className="job">
                                  <span className="yellowColor">-2016 - 2018</span>
                                  <h3>Senior Designer</h3>
                                </div>
                                <div className="place">
                                  <span>-ABC Studio</span>
                                </div>
                              </div>
                              <div className="text">
                                <p>Website development is the process of building, programming, coding and maintaining websites and web applications.</p>
                              </div>
                              <a className="elisc_tm_full_link" href="#"></a>
                              <div className="hidden_details">
                                <div className="descriptions">
                                  <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                  <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                  <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <img className="popup_image" src="/assets/images/experience/3.jpg" alt="" />
                            <div className="list_inner">
                              <div className="short">
                                <div className="job">
                                  <span className="yellowColor">-2015 - 2016</span>
                                  <h3>UX Designer</h3>
                                </div>
                                <div className="place">
                                  <span>-Colorlib</span>
                                </div>
                              </div>
                              <div className="text">
                                <p>Website development is the process of building, programming, coding and maintaining websites and web applications.</p>
                              </div>
                              <a className="elisc_tm_full_link" href="#"></a>
                              <div className="hidden_details">
                                <div className="descriptions">
                                  <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                  <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                  <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <img className="popup_image" src="/assets/images/experience/4.jpg" alt="" />
                            <div className="list_inner">
                              <div className="short">
                                <div className="job">
                                  <span className="yellowColor">-2013 - 2015</span>
                                  <h3>Freelancer</h3>
                                </div>
                                <div className="place">
                                  <span>-Vivaco Corp.</span>
                                </div>
                              </div>
                              <div className="text">
                                <p>Website development is the process of building, programming, coding and maintaining websites and web applications.</p>
                              </div>
                              <a className="elisc_tm_full_link" href="#"></a>
                              <div className="hidden_details">
                                <div className="descriptions">
                                  <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                  <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                  <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
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
            
              {/* SERVICES */}
              <div className="elisc_tm_section" id="service">
                <div className="elisc_tm_services">
                  <div className="tm_content">
                    <div className="elisc_tm_service_title">
                      <div className="elisc_tm_title">
                        <span>- Services</span>
                        <h3>My Services</h3>
                      </div>
                      <a href="mailto:support@elisc.com">support@elisc.com</a>
                    </div>
                    <div className="service_list">
                      <ul>
                        <li>
                          <img className="popup_image" src="/assets/images/service/2.jpg" alt="" />
                          <div className="list_inner">
                            <div className="details">
                              <div className="title">
                                <span>01</span>
                                <h3>Web Design</h3>
                              </div>
                              <div className="text">
                                <p>Web development is the process of building, programming...</p>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a href="#">Read More<span><img className="svg" src="/assets/images/svg/rightArrow.svg" alt="" /></span></a>
                              </div>
                            </div>
                            <a className="elisc_tm_full_link" href="#"></a>
                            <div className="hidden_details">
                              <div className="descriptions">
                                <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img className="popup_image" src="/assets/images/service/3.jpg" alt="" />
                          <div className="list_inner">
                            <div className="details">
                              <div className="title">
                                <span>02</span>
                                <h3>UI/UX Design</h3>
                              </div>
                              <div className="text">
                                <p>Web development is the process of building, programming...</p>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a href="#">Read More<span><img className="svg" src="/assets/images/svg/rightArrow.svg" alt="" /></span></a>
                              </div>
                            </div>
                            <a className="elisc_tm_full_link" href="#"></a>
                            <div className="hidden_details">
                              <div className="descriptions">
                                <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img className="popup_image" src="/assets/images/service/4.jpg" alt="" />
                          <div className="list_inner">
                            <div className="details">
                              <div className="title">
                                <span>03</span>
                                <h3>Mobile Application</h3>
                              </div>
                              <div className="text">
                                <p>Web development is the process of building, programming...</p>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a href="#">Read More<span><img className="svg" src="/assets/images/svg/rightArrow.svg" alt="" /></span></a>
                              </div>
                            </div>
                            <a className="elisc_tm_full_link" href="#"></a>
                            <div className="hidden_details">
                              <div className="descriptions">
                                <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img className="popup_image" src="/assets/images/service/5.jpg" alt="" />
                          <div className="list_inner">
                            <div className="details">
                              <div className="title">
                                <span>04</span>
                                <h3>User Research</h3>
                              </div>
                              <div className="text">
                                <p>Web development is the process of building, programming...</p>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a href="#">Read More<span><img className="svg" src="/assets/images/svg/rightArrow.svg" alt="" /></span></a>
                              </div>
                            </div>
                            <a className="elisc_tm_full_link" href="#"></a>
                            <div className="hidden_details">
                              <div className="descriptions">
                                <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img className="popup_image" src="/assets/images/service/6.jpg" alt="" />
                          <div className="list_inner">
                            <div className="details">
                              <div className="title">
                                <span>05</span>
                                <h3>Animation</h3>
                              </div>
                              <div className="text">
                                <p>Web development is the process of building, programming...</p>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a href="#">Read More<span><img className="svg" src="/assets/images/svg/rightArrow.svg" alt="" /></span></a>
                              </div>
                            </div>
                            <a className="elisc_tm_full_link" href="#"></a>
                            <div className="hidden_details">
                              <div className="descriptions">
                                <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img className="popup_image" src="/assets/images/service/7.jpg" alt="" />
                          <div className="list_inner">
                            <div className="details">
                              <div className="title">
                                <span>06</span>
                                <h3>Game Development</h3>
                              </div>
                              <div className="text">
                                <p>Web development is the process of building, programming...</p>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a href="#">Read More<span><img className="svg" src="/assets/images/svg/rightArrow.svg" alt="" /></span></a>
                              </div>
                            </div>
                            <a className="elisc_tm_full_link" href="#"></a>
                            <div className="hidden_details">
                              <div className="descriptions">
                                <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="elisc_tm_video">
                      <img className="placeholder" src="/assets/images/thumbs/4-2.jpg" alt="" />
                      <div className="image" data-img-url="/assets/images/service/1.jpg"></div>
                      <div className="overlay"></div>
                      <span className="play" onClick={() => window.open('https://www.youtube.com/watch?v=7e90gBu4pas', '_blank')}>
                        <img className="svg" src="/assets/images/svg/play.svg" alt="" />
                      </span>
                      <div className="text">
                        <h3>Intro Video</h3>
                      </div>
                      <a className="elisc_tm_full_link popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas" onClick={(e) => { e.preventDefault(); window.open('https://www.youtube.com/watch?v=7e90gBu4pas', '_blank'); }}></a>
                    </div>
                  </div>
                </div>
              </div>
             
             {/* PORTFOLIO */}
              <div className="elisc_tm_section" id="portfolio">
                <div className="elisc_tm_portfolio">
                  <div className="tm_content">
                    <div className="elisc_tm_title">
                      <span>- Portfolio</span>
                      <h3>My Works</h3>
                    </div>
                    <div className="portfolio_filter">
                      <ul>
                        <li><a href="#" className="current" data-filter="*">All</a></li>
                        <li><a href="#" data-filter=".youtube">Youtube</a></li>
                        <li><a href="#" data-filter=".vimeo">Vimeo</a></li>
                        <li><a href="#" data-filter=".soundcloud">Soundcloud</a></li>
                        <li><a href="#" data-filter=".modalbox">Modalbox</a></li>
                      </ul>
                    </div>
                   <div className="portfolio_list">
                     <ul className="gallery_zoom">
                       <li className="youtube">
                         <div className="list_inner">
                           <div className="image">
                             <img src="/assets/images/thumbs/1-1.jpg" alt="" />
                              <div className="main" data-img-url="/assets/images/portfolio/1.jpg"></div>
                           </div>
                           <div className="overlay"></div>
                           <img className="svg" src="/assets/images/svg/youtube.svg" alt="" />
                           <div className="details">
                             <span>Youtube</span>
                             <h3>Aumeo Audio</h3>
                           </div>
                           <a className="elisc_tm_full_link youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas"></a>
                         </div>
                       </li>
                       <li className="vimeo">
                         <div className="list_inner">
                           <div className="image">
                             <img src="/assets/images/thumbs/1-1.jpg" alt="" />
                              <div className="main" data-img-url="/assets/images/portfolio/2.jpg"></div>
                           </div>
                           <div className="overlay"></div>
                           <img className="svg" src="/assets/images/svg/vimeo.svg" alt="" />
                           <div className="details">
                             <span>Vimeo</span>
                             <h3>Bicker & Jenna</h3>
                           </div>
                           <a className="elisc_tm_full_link vimeo" href="https://vimeo.com/337293658"></a>
                         </div>
                       </li>
                       <li className="soundcloud">
                         <div className="list_inner">
                           <div className="image">
                             <img src="/assets/images/thumbs/1-1.jpg" alt="" />
                              <div className="main" data-img-url="/assets/images/portfolio/3.jpg"></div>
                           </div>
                           <div className="overlay"></div>
                           <img className="svg" src="/assets/images/svg/soundcloud.svg" alt="" />
                           <div className="details">
                             <span>Soundcloud</span>
                             <h3>Botanical Escape</h3>
                           </div>
                           <a className="elisc_tm_full_link soundcloud" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></a>
                         </div>
                       </li>
                       <li className="modalbox">
                         <div className="list_inner">
                           <div className="image">
                             <img src="/assets/images/thumbs/1-1.jpg" alt="" />
                             <div className="main" data-img-url="/assets/images/portfolio/4.jpg"></div>
                           </div>
                           <div className="overlay"></div>
                           <img className="svg" src="/assets/images/svg/text.svg" alt="" />
                           <div className="details">
                             <span>Modalbox</span>
                             <h3>Model Car</h3>
                           </div>
                           <a className="elisc_tm_full_link portfolio_popup" href="#"></a>
                           <div className="hidden_content">
                             <div className="popup_details">
                               <div className="main_details">
                                 <div className="textbox">
                                   <p>We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible.</p>
                                   <p>Mockups are useful both for the creative phase of the project - for instance when you&apos;re trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.</p>
                                 </div>
                                 <div className="detailbox">
                                   <ul>
                                     <li>
                                       <span className="first">Client</span>
                                       <span>Alvaro Morata</span>
                                     </li>
                                     <li>
                                       <span className="first">Category</span>
                                       <span><a href="#">Detail</a></span>
                                     </li>
                                     <li>
                                       <span className="first">Date</span>
                                       <span>March 07, 2021</span>
                                     </li>
                                     <li>
                                       <span className="first">Share</span>
                                       <ul className="share">
                                         <li><a href="#"><img className="svg" src="/assets/images/svg/social/facebook.svg" alt="" /></a></li>
                                         <li><a href="#"><img className="svg" src="/assets/images/svg/social/twitter.svg" alt="" /></a></li>
                                         <li><a href="#"><img className="svg" src="/assets/images/svg/social/instagram.svg" alt="" /></a></li>
                                       </ul>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                               <div className="additional_images">
                                 <ul>
                                   <li>
                                     <div className="list_inner">
                                       <div className="my_image">
                                         <img src="/assets/images/thumbs/4-2.jpg" alt="" />
                                         <div className="main" data-img-url="/assets/images/portfolio/1.jpg"></div>
                                       </div>
                                     </div>
                                   </li>
                                   <li>
                                     <div className="list_inner">
                                       <div className="my_image">
                                         <img src="/assets/images/thumbs/4-2.jpg" alt="" />
                                         <div className="main" data-img-url="/assets/images/portfolio/2.jpg"></div>
                                       </div>
                                     </div>
                                   </li>
                                   <li>
                                     <div className="list_inner">
                                       <div className="my_image">
                                         <img src="/assets/images/thumbs/4-2.jpg" alt="" />
                                         <div className="main" data-img-url="/assets/images/portfolio/3.jpg"></div>
                                       </div>
                                     </div>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </div>
                       </li>
                     </ul>
                   </div>
                    <div className="elisc_tm_button" data-position="center">
                      <a href="#">View all projects</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* PARTNERS */}
              <div className="elisc_tm_partners">
                <div className="tm_content">
                  <div className="elisc_tm_title">
                    <span>- Clients</span>
                    <h3>Customers &amp; clients</h3>
                  </div>
                  <div className="partners_inner">
                    <ul>
                      <li>
                        <div className="list_inner">
                          <img src="/assets/images/partners/1.png" alt="" />
                          <a className="elisc_tm_full_link" href="#"></a>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <img src="/assets/images/partners/2.png" alt="" />
                          <a className="elisc_tm_full_link" href="#"></a>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <img src="/assets/images/partners/3.png" alt="" />
                          <a className="elisc_tm_full_link" href="#"></a>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <img src="/assets/images/partners/4.png" alt="" />
                          <a className="elisc_tm_full_link" href="#"></a>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <img src="/assets/images/partners/5.png" alt="" />
                          <a className="elisc_tm_full_link" href="#"></a>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <img src="/assets/images/partners/6.png" alt="" />
                          <a className="elisc_tm_full_link" href="#"></a>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <img src="/assets/images/partners/7.png" alt="" />
                          <a className="elisc_tm_full_link" href="#"></a>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <img src="/assets/images/partners/8.png" alt="" />
                          <a className="elisc_tm_full_link" href="#"></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             
              {/* TESTIMONIALS */}
              <div className="elisc_tm_testimonial_wrapper">
                <div className="tm_content">
                  <div className="elisc_tm_testimonials">
                    <div className="elisc_tm_title" data-position="center">
                      <span>- Testimonial</span>
                      <h3>What client&apos;s say?</h3>
                    </div>
                    <div className="testimonials_list">
                      <ul className="owl-carousel owl-theme">
                        <li>
                          <div className="text">
                            <p>I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism.</p>
                          </div>
                          <div className="short">
                            <div className="image">
                              <div className="main" data-img-url="/assets/images/testimonials/1.jpg"></div>
                            </div>
                            <div className="detail">
                              <h3>John Doe</h3>
                            </div>
                          </div>
                          <p className="job">User Interface Design at PCL Lab</p>
                        </li>
                        <li>
                          <div className="text">
                            <p>Really the Code Quality, Customer Support, and design are awesome and its good support they are giving. They give an instant solution to our needs. Really awesome. I will strongly recommend to my friends.</p>
                          </div>
                          <div className="short">
                            <div className="image">
                              <div className="main" data-img-url="/assets/images/testimonials/2.jpg"></div>
                            </div>
                            <div className="detail">
                              <h3>Keita Smith</h3>
                            </div>
                          </div>
                          <p className="job">Senior Designer at Behance</p>
                        </li>
                        <li>
                          <div className="text">
                            <p>Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming but the Marketify team helped me successfully.</p>
                          </div>
                          <div className="short">
                            <div className="image">
                              <div className="main" data-img-url="/assets/images/testimonials/3.jpg"></div>
                            </div>
                            <div className="detail">
                              <h3>Alan Walker</h3>
                            </div>
                          </div>
                          <p className="job">Sales Manager at Vivaco Shop</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* NEWS */}
              <div className="elisc_tm_section" id="news">
                <div className="elisc_tm_news fn_w_sminiboxes">
                  <div className="tm_content">
                    <div className="wrapper">
                      <div className="left fn_w_sminibox">
                        <div className="elisc_tm_sticky_section">
                          <div className="elisc_tm_title">
                            <span>- Blog</span>
                            <h3>My blog &amp; news</h3>
                          </div>
                          <div className="elisc_tm_button">
                            <a className="anchor" href="#contact">Get in touch</a>
                          </div>
                        </div>
                      </div>
                      <div className="right fn_w_sminibox">
                        <div className="elisc_tm_sticky_section">
                          <div className="list">
                            <ul>
                              <li>
                                <img className="popup_image" src="/assets/images/news/1.jpg" alt="" />
                                <div className="list_inner">
                                  <div className="info">
                                    <div className="meta">
                                      <img className="svg" src="/assets/images/svg/calendar.svg" alt="" /> <span>April 12, 2023</span>
                                    </div>
                                    <div className="title">
                                      <h3><a href="#">12 unique examples of portfolio websites</a></h3>
                                    </div>
                                  </div>
                                  <div className="elisc_tm_read_more">
                                    <a className="line_effect" href="#">Learn More<span><img className="svg" src="/assets/images/svg/rightArrow.svg" alt="" /></span></a>
                                  </div>
                                  <div className="news_hidden_details">
                                    <div className="news_popup_informations">
                                      <div className="text">
                                        <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                        <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                        <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <img className="popup_image" src="/assets/images/news/2.jpg" alt="" />
                                <div className="list_inner">
                                  <div className="info">
                                    <div className="meta">
                                      <img className="svg" src="/assets/images/svg/calendar.svg" alt="" /> <span>April 14, 2023</span>
                                    </div>
                                    <div className="title">
                                      <h3><a href="#">Follow Your Own Design Process</a></h3>
                                    </div>
                                  </div>
                                  <div className="elisc_tm_read_more">
                                    <a className="line_effect" href="#">Learn More<span><img className="svg" src="/assets/images/svg/rightArrow.svg" alt="" /></span></a>
                                  </div>
                                  <div className="news_hidden_details">
                                    <div className="news_popup_informations">
                                      <div className="text">
                                        <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                        <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                        <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <img className="popup_image" src="/assets/images/news/3.jpg" alt="" />
                                <div className="list_inner">
                                  <div className="info">
                                    <div className="meta">
                                      <img className="svg" src="/assets/images/svg/calendar.svg" alt="" /> <span>April 16, 2023</span>
                                    </div>
                                    <div className="title">
                                      <h3><a href="#">Usability Secrets to Create Better Interfaces</a></h3>
                                    </div>
                                  </div>
                                  <div className="elisc_tm_read_more">
                                    <a className="line_effect" href="#">Learn More<span><img className="svg" src="/assets/images/svg/rightArrow.svg" alt="" /></span></a>
                                  </div>
                                  <div className="news_hidden_details">
                                    <div className="news_popup_informations">
                                      <div className="text">
                                        <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                        <p>In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.</p>
                                        <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Elisc, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                                      </div>
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
             
              {/* CONTACT */}
              <div className="elisc_tm_section" id="contact">
                <div className="elisc_tm_contact">
                  <div className="tm_content">
                    <div className="wrapper">
                      <div className="left">
                        <div className="elisc_tm_title">
                          <span>- Let&apos;s Connect</span>
                          <h3>Get in touch</h3>
                        </div>
                        <div className="text">
                          <p>I&apos;m currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
                        </div>
                        <div className="info">
                          <ul>
                            <li>
                              <a href="tel:+77 022 444 05 05">+77 022 444 05 05</a>
                            </li>
                            <li>
                              <a href="mailto:support@elisc.com">support@elisc.com</a>
                            </li>
                            <li>
                              <a className="href_location" href="#">Ave Street Avenue, New York</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="right">
                        <div className="fields">
                          <form action="/" method="post" className="contact_form" id="contact_form">
                            <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                            <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                            <div className="first">
                              <ul>
                                <li>
                                  <input id="name" type="text" placeholder="Enter your name" autoComplete="off" />
                                </li>
                                <li>
                                  <input id="email" type="text" placeholder="Your email" autoComplete="off" />
                                </li>
                              </ul>
                            </div>
                            <div className="last">
                              <textarea id="message" placeholder="Write something..."></textarea>
                            </div>
                            <div className="elisc_tm_button">
                              <a id="send_message" href="#">Submit now</a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elisc_tm_map">
                    <div className="map_wrap">
                      <div className="mapouter">
                        <div className="gmap_canvas">
                          <iframe 
                            width="100%" 
                            height={375} 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight={0} 
                            marginWidth={0}
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
             </div>
             
           </div>
        </div>
      </div>
    </>
  );
}
