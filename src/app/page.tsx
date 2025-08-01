'use client';

import { useState, useEffect } from 'react';
import { useEliscTemplate } from './hooks/useEliscTemplate';
import Preloader from '../components/Preloader';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';

export default function Home() {
  const { activeSection, mobileMenuOpen, isLoaded, handleSectionChange, toggleMobileMenu } = useEliscTemplate();
  const [portfolioPage, setPortfolioPage] = useState(0);

  // Portfolio carousel pagination functionality
  useEffect(() => {
    const handlePortfolioPagination = () => {
      const portfolioItems = document.querySelectorAll('#portfolio-carousel li');
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1040 && window.innerWidth > 768;
      
      let itemsPerPage = 3; // Desktop: 3 items
      if (isMobile) itemsPerPage = 1; // Mobile: 1 item
      else if (isTablet) itemsPerPage = 2; // Tablet: 2 items
      
      const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
      const currentPage = Math.min(portfolioPage, totalPages - 1);
      
      // Hide all items first
      portfolioItems.forEach((item) => {
        const htmlItem = item as HTMLElement;
        htmlItem.style.display = 'none';
      });
      
      // Show items for current page
      const startIndex = currentPage * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, portfolioItems.length);
      
      for (let i = startIndex; i < endIndex; i++) {
        const item = portfolioItems[i] as HTMLElement;
        if (item) {
          item.style.display = 'block';
        }
      }
    };

    const prevButton = document.querySelector('.elisc_tm_portfolio .prev_button');
    const nextButton = document.querySelector('.elisc_tm_portfolio .next_button');
    
    const handlePrev = (e: Event) => {
      e.preventDefault();
      setPortfolioPage(prev => Math.max(0, prev - 1));
    };
    
    const handleNext = (e: Event) => {
      e.preventDefault();
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1040 && window.innerWidth > 768;
      let itemsPerPage = 3;
      if (isMobile) itemsPerPage = 1;
      else if (isTablet) itemsPerPage = 2;
      
      const totalItems = 4; // We have 4 portfolio items
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      setPortfolioPage(prev => Math.min(totalPages - 1, prev + 1));
    };
    
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', handlePrev);
      nextButton.addEventListener('click', handleNext);
    }
    
    // Handle resize for responsive behavior
    const handleResize = () => {
      handlePortfolioPagination();
    };
    
    // Initial setup and pagination
    setTimeout(() => {
      handlePortfolioPagination();
    }, 100); // Small delay to ensure DOM is ready
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (prevButton && nextButton) {
        prevButton.removeEventListener('click', handlePrev);
        nextButton.removeEventListener('click', handleNext);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [portfolioPage]);

  return (
    <>
      {/* PRELOADER */}
      <Preloader />

      {/* MAGIC CURSOR */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

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
                  <p>Copyright &copy; 2025</p>
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
                  <h3><span>Anwar Abdullah<span className="back">Anwar Abdullah</span></span></h3>
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
                  <p>Copyright © 2025 Anwar Abdullah. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MAINPART */}
          <div className="elisc_tm_mainpart">
            <div className="mainpart_inner">

              {/* HOME */}
              <HomeSection />
            
              {/* ABOUT */}
              <AboutSection />
            
              {/* SERVICES */}
              <ServicesSection />
             
              {/* PORTFOLIO */}
              <div className="elisc_tm_section" id="portfolio">
                <div className="elisc_tm_portfolio">
                  <div className="tm_content">
                    <div className="elisc_tm_portfolio_title">
                      <div className="elisc_tm_title">
                        <span>- Projects</span>
                        <h3>Recent completed works</h3>
                      </div>
                      <div className="buttons">
                        <a className="prev_button" href="#"><img className="svg" src="/assets/images/svg/prev.svg" alt="" /></a>
                        <a className="next_button" href="#"><img className="svg" src="/assets/images/svg/next.svg" alt="" /></a>
                      </div>
                    </div>
                    <div className="portfolio_list">
                      <ul className="owl-carousel gallery_zoom" id="portfolio-carousel">
                        <li>
                          <div className="list_inner">
                            <div className="image">
                              <img src="/assets/images/thumbs/31-36.jpg" alt="" />
                              <div className="main" data-img-url="/assets/images/portfolio/1.jpg"></div>
                              <a className="elisc_tm_full_link popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas"></a>
                            </div>
                            <div className="details">
                              <span className="category"><a href="#">Youtube</a></span>
                              <h3 className="title"><a className="line_effect popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas">New Technology</a></h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="image">
                              <img src="/assets/images/thumbs/31-36.jpg" alt="" />
                              <div className="main" data-img-url="/assets/images/portfolio/2.jpg"></div>
                              <a className="elisc_tm_full_link popup-vimeo" href="https://vimeo.com/337293658"></a>
                            </div>
                            <div className="details">
                              <span className="category"><a href="#">Vimeo</a></span>
                              <h3 className="title"><a className="line_effect popup-vimeo" href="https://vimeo.com/337293658">Firogo Majestic Ltd.</a></h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="image">
                              <img src="/assets/images/thumbs/31-36.jpg" alt="" />
                              <div className="main" data-img-url="/assets/images/portfolio/3.jpg"></div>
                              <a className="elisc_tm_full_link soundcloude_link mfp-iframe audio" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></a>
                            </div>
                            <div className="details">
                              <span className="category"><a href="#">Soundcloud</a></span>
                              <h3 className="title"><a className="line_effect soundcloude_link mfp-iframe audio" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">Creative Building</a></h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="image">
                              <img src="/assets/images/thumbs/31-36.jpg" alt="" />
                              <div className="main" data-img-url="/assets/images/portfolio/4.jpg"></div>
                              <a className="elisc_tm_full_link portfolio_popup" href="#"></a>
                            </div>
                            <div className="details">
                              <span className="category"><a href="#">Modalbox</a></span>
                              <h3 className="title"><a className="line_effect portfolio_popup" href="#">Beautiful Boat</a></h3>
                            </div>

                            {/* Modalbox Info Start */}
                            <div className="hidden_content_portfolio">
                              <div className="popup_details">
                                <div className="main_details">
                                  <div className="textbox">
                                    <p>We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance ease of modification. Building mockups strikes the ideal balance ease of modification.</p>
                                    <p>Mockups are useful both for the creative phase of the project - for instance when you&apos;re trying to figure out your user flows or the proper visual hierarchy - and the production phase when they phase when they will represent the target product. Building mockups strikes the ideal balance ease of modification.</p>
                                  </div>
                                  <div className="detailbox">
                                    <ul>
                                      <li>
                                        <span className="first">Client</span>
                                        <span>Alvaro Morata</span>
                                      </li>
                                      <li>
                                        <span className="first">Category</span>
                                        <span><a href="#">Modalbox</a></span>
                                      </li>
                                      <li>
                                        <span className="first">Date</span>
                                        <span>April 10, 2025</span>
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
                                          <div className="main" data-img-url="/assets/images/portfolio/5.jpg"></div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="list_inner">
                                        <div className="my_image">
                                          <img src="/assets/images/thumbs/4-2.jpg" alt="" />
                                          <div className="main" data-img-url="/assets/images/portfolio/6.jpg"></div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="list_inner">
                                        <div className="my_image">
                                          <img src="/assets/images/thumbs/4-2.jpg" alt="" />
                                          <div className="main" data-img-url="/assets/images/portfolio/7.jpg"></div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* /Modalbox Info Start */}

                          </div>
                        </li>
                      </ul>
                      <div className="elisc_tm_button" data-position="center">
                        <a href="#">View all projects</a>
                      </div>
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
                <div className="elisc_tm_news">
                  <div className="tm_content">
                    <div className="wrapper">
                      <div className="left">
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
                      <div className="right">
                        <div className="elisc_tm_sticky_section">
                          <div className="list">
                            <ul>
                              <li>
                                <img className="popup_image" src="/assets/images/news/1.jpg" alt="" />
                                <div className="list_inner">
                                  <div className="info">
                                    <div className="meta">
                                      <img className="svg" src="/assets/images/svg/calendar.svg" alt="" /> <span>April 12, 2025</span>
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
                                      <img className="svg" src="/assets/images/svg/calendar.svg" alt="" /> <span>April 01, 2025</span>
                                    </div>
                                    <div className="title">
                                      <h3><a href="#">Dealing with spring allergy symptoms</a></h3>
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
                                        <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Kura, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
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
                                      <img className="svg" src="/assets/images/svg/calendar.svg" alt="" /> <span>March 30, 2025</span>
                                    </div>
                                    <div className="title">
                                      <h3><a href="#">Why we should read fewer books</a></h3>
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
                                        <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Kura, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <img className="popup_image" src="/assets/images/news/4.jpg" alt="" />
                                <div className="list_inner">
                                  <div className="info">
                                    <div className="meta">
                                      <img className="svg" src="/assets/images/svg/calendar.svg" alt="" /> <span>March 15, 2025</span>
                                    </div>
                                    <div className="title">
                                      <h3><a href="#">Skills and tools for efficient web design</a></h3>
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
                                        <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Kura, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <img className="popup_image" src="/assets/images/news/5.jpg" alt="" />
                                <div className="list_inner">
                                  <div className="info">
                                    <div className="meta">
                                      <img className="svg" src="/assets/images/svg/calendar.svg" alt="" /> <span>Feb 20, 2025</span>
                                    </div>
                                    <div className="title">
                                      <h3><a href="#">How to use python for web scraping</a></h3>
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
                                        <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Kura, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <img className="popup_image" src="/assets/images/news/6.jpg" alt="" />
                                <div className="list_inner">
                                  <div className="info">
                                    <div className="meta">
                                      <img className="svg" src="/assets/images/svg/calendar.svg" alt="" /> <span>Feb 11, 2025</span>
                                    </div>
                                    <div className="title">
                                      <h3><a href="#">Best wireframe tools for web designers</a></h3>
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
                                        <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Kura, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <img className="popup_image" src="/assets/images/news/7.jpg" alt="" />
                                <div className="list_inner">
                                  <div className="info">
                                    <div className="meta">
                                      <img className="svg" src="/assets/images/svg/calendar.svg" alt="" /> <span>Jan 31, 2025</span>
                                    </div>
                                    <div className="title">
                                      <h3><a href="#">Why we&apos;re crazy about animations</a></h3>
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
                                        <p>That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Kura, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.</p>
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
                              <a href="tel:+62 877 9119 4987">+62 877 9119 4987</a>
                            </li>
                            <li>
                              <a href="mailto:aannwaran@gmail.com">aannwaran@gmail.com</a>
                            </li>
                            <li>
                              <a className="href_location" href="#">Batam. Kepulauan Riau, Indonesia</a>
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
                            src="https://maps.google.com/maps?q=Belian%2C%20Batam%20City%2C%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed" 
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
