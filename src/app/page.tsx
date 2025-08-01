'use client';

import { useState, useEffect } from 'react';
import { useEliscTemplate } from './hooks/useEliscTemplate';
import Preloader from '../components/Preloader';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import PartnersSection from '../components/sections/PartnersSection';
import ContactSection from '../components/sections/ContactSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import NewsSection from '../components/sections/NewsSection';

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
              <PortfolioSection />
              
              {/* PARTNERS */}
              <PartnersSection />
             
              {/* TESTIMONIALS */}
              <TestimonialSection />
              
              {/* NEWS */}
              <NewsSection />
             
              {/* CONTACT */}
              <ContactSection />
             </div>
             
           </div>
        </div>
      </div>
    </>
  );
}
