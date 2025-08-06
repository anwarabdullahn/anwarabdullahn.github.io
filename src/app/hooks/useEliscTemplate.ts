'use client';

import { useEffect, useState, useCallback } from 'react';

export const useEliscTemplate = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [particles, setParticles] = useState([]);
  const [typingText, setTypingText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Preloader functionality
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.add('loaded');
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('preloaded');
        setTimeout(() => {
          preloader.remove();
        }, 1200);
      }

      // Initialize section visibility
      const sections = document.querySelectorAll('.elisc_tm_section');
      sections.forEach(section => {
        section.classList.remove('hidden');
        section.classList.remove('active');
        section.classList.add('active');
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize modalbox
    const initModalbox = () => {
      const allWrap = document.querySelector('.elisc_tm_all_wrap');
      if (allWrap && !document.querySelector('.elisc_tm_modalbox')) {
        const modalbox = document.createElement('div');
        modalbox.className = 'elisc_tm_modalbox';
        modalbox.innerHTML = `
          <div class="box_inner">
            <div class="close"><a href="#"><i class="icon-cancel"></i></a></div>
            <div class="description_wrap"></div>
          </div>
        `;
        allWrap.prepend(modalbox);
      }
    };

    // Moving box for news hover effect
    const initMovingBox = () => {
      const news = document.querySelector('.elisc_tm_news');
      if (news && !document.querySelector('.movingbox')) {
        const movingbox = document.createElement('div');
        movingbox.className = 'movingbox';
        document.body.appendChild(movingbox);
        
        const listItems = document.querySelectorAll('.elisc_tm_news .list ul li');
        listItems.forEach(item => {
          item.addEventListener('mouseenter', (e) => {
            const popupImage = item.querySelector('.popup_image');
            if (popupImage) {
              const imageSrc = popupImage.getAttribute('src');
              movingbox.classList.add('opened');
              movingbox.style.backgroundImage = `url(${imageSrc})`;
            }
          });
          
          item.addEventListener('mouseleave', () => {
            movingbox.classList.remove('opened');
          });
          
          item.addEventListener('mousemove', (event) => {
            const mouseEvent = event as MouseEvent;
            const movingboxH = movingbox.offsetHeight / 2;
            const ymove = mouseEvent.clientY - movingboxH;
            const xmove = mouseEvent.clientX + 20;
            movingbox.style.top = ymove + 'px';
            movingbox.style.left = xmove + 'px';
          });
        });
      }
    };

    // Cursor functionality
    const initCursor = () => {
      const myCursor = document.querySelector('.mouse-cursor');
      if (myCursor) {
        const cursorInner = document.querySelector('.cursor-inner');
        const cursorOuter = document.querySelector('.cursor-outer');
        
        if (cursorInner && cursorOuter) {
          const cursorInnerEl = cursorInner as HTMLElement;
          const cursorOuterEl = cursorOuter as HTMLElement;
          
          window.addEventListener('mousemove', (e) => {
            cursorOuterEl.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorInnerEl.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          });
          
          document.addEventListener('mouseenter', (e) => {
            const target = e.target as HTMLElement;
            if (target && typeof target.matches === 'function' && target.matches('a, .cursor-pointer')) {
              cursorInner.classList.add('cursor-hover');
              cursorOuter.classList.add('cursor-hover');
            }
          });
          
          document.addEventListener('mouseleave', (e) => {
            const target = e.target as HTMLElement;
            if (target && typeof target.matches === 'function' && target.matches('a, .cursor-pointer')) {
              cursorInner.classList.remove('cursor-hover');
              cursorOuter.classList.remove('cursor-hover');
            }
          });
          
          cursorInnerEl.style.visibility = 'visible';
          cursorOuterEl.style.visibility = 'visible';
        }
      }
    };

    // Experience popup functionality
    const initExperiencePopup = () => {
      const modalBox = document.querySelector('.elisc_tm_modalbox');
      const buttons = document.querySelectorAll('.elisc_tm_experience .elisc_tm_full_link');
      const closePopup = modalBox?.querySelector('.close a');
      
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const parent = button.closest('.elisc_tm_experience .list ul li');
          if (parent && modalBox) {
            const popupImage = parent.querySelector('.popup_image');
            const jobSpan = parent.querySelector('.job span');
            const jobH3 = parent.querySelector('.job h3');
            const placeSpan = parent.querySelector('.place span');
            const hiddenDetails = parent.querySelector('.hidden_details');
            
            if (jobSpan && jobH3 && placeSpan && hiddenDetails) {
              let elImage = "" as string | null;
              if (popupImage) {
                elImage = popupImage.getAttribute('src');
              }
              const year = jobSpan.textContent || '';
              const job = jobH3.textContent || '';
              const place = placeSpan.textContent || '';
              const content = hiddenDetails.innerHTML;
              
              modalBox.classList.add('opened');
              const descWrap = modalBox.querySelector('.description_wrap');
              if (descWrap) {
                descWrap.innerHTML = content;
                const descriptions = descWrap.querySelector('.descriptions');
                if (descriptions) {
                  descriptions.insertAdjacentHTML('afterbegin', 
                    `<div class="top_image" style="${elImage ? '' : 'display: none;'}"><img src="/assets/images/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="${elImage}"></div></div>`
                  );
                  descriptions.insertAdjacentHTML('afterbegin',
                    `<div class="infos"><div class="year"><span>${year}</span></div><div class="job"><span>${place}</span><h3>${job}</h3></div></div>`
                  );
                  // Call dataImages to process the new content
                  dataImages();
                }
              }
            }
          }
        });
      });
      
      closePopup?.addEventListener('click', (e) => {
        e.preventDefault();
        modalBox?.classList.remove('opened');
        const descWrap = modalBox?.querySelector('.description_wrap');
        if (descWrap) descWrap.innerHTML = '';
      });
    };

    // Service popup functionality
    const initServicePopup = () => {
      const modalBox = document.querySelector('.elisc_tm_modalbox');
      const buttons = document.querySelectorAll('.elisc_tm_services .service_list .elisc_tm_full_link');
      const closePopup = modalBox?.querySelector('.close a');
      
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const parent = button.closest('.elisc_tm_services .service_list ul li');
          if (parent && modalBox) {
            const popupImage = parent.querySelector('.popup_image');
            const titleH3 = parent.querySelector('.title h3');
            const hiddenDetails = parent.querySelector('.hidden_details');
            
            if (popupImage && titleH3 && hiddenDetails) {
              const elImage = popupImage.getAttribute('src');
              const title = titleH3.textContent || '';
              const content = hiddenDetails.innerHTML;
              
              modalBox.classList.add('opened');
              const descWrap = modalBox.querySelector('.description_wrap');
              if (descWrap) {
                descWrap.innerHTML = content;
                const descriptions = descWrap.querySelector('.descriptions');
                if (descriptions) {
                  descriptions.insertAdjacentHTML('afterbegin', 
                    `<div class="top_image"><img src="/assets/images/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="${elImage}"></div></div>`
                  );
                  descriptions.insertAdjacentHTML('afterbegin',
                    `<div class="main_title"><h3>${title}</h3></div>`
                  );
                  // Call dataImages to process the new content
                  dataImages();
                }
              }
            }
          }
        });
      });
    };

    // Portfolio popup functionality
    const initPortfolioPopup = () => {
      const modalBox = document.querySelector('.elisc_tm_modalbox');
      const buttons = document.querySelectorAll('.elisc_tm_portfolio .portfolio_popup');
      
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const parent = button.closest('li');
          if (parent && modalBox) {
            const imageMain = parent.querySelector('.image .main');
            const hiddenContent = parent.querySelector('.hidden_content_portfolio');
            const category = parent.querySelector('.details .category');
            const titleA = parent.querySelector('.details .title a');
            
            if (imageMain && hiddenContent && category && titleA) {
              const image = imageMain.getAttribute('data-img-url');
              const details = hiddenContent.innerHTML;
              const categoryText = category.innerHTML;
              const title = titleA.textContent || '';
              
              modalBox.classList.add('opened');
              const descWrap = modalBox.querySelector('.description_wrap');
              if (descWrap) {
                descWrap.innerHTML = details;
                const popupDetails = descWrap.querySelector('.popup_details');
                if (popupDetails) {
                  popupDetails.insertAdjacentHTML('afterbegin', 
                    `<div class="top_image"><img src="/assets/images/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="${image}"></div></div>`
                  );
                  popupDetails.insertAdjacentHTML('afterbegin',
                    `<div class="portfolio_main_title"><span class="category">${categoryText}</span><h3 class="title">${title}</h3></div>`
                  );
                  // Call dataImages to process the new content
                  dataImages();
                }
              }
            }
          }
        });
      });
    };

    // News popup functionality
    const initNewsPopup = () => {
      const modalBox = document.querySelector('.elisc_tm_modalbox');
      const buttons = document.querySelectorAll('.elisc_tm_news .list .title a, .elisc_tm_news .elisc_tm_read_more a');
      
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const parent = button.closest('li');
          if (parent && modalBox) {
            const hiddenDetails = parent.querySelector('.news_hidden_details');
            const popupImage = parent.querySelector('.popup_image');
            const meta = parent.querySelector('.meta');
            const titleA = parent.querySelector('.title h3 a');
            
            if (hiddenDetails && popupImage && meta && titleA) {
              const content = hiddenDetails.innerHTML;
              const image = popupImage.getAttribute('src');
              const metaText = meta.innerHTML;
              const title = titleA.textContent || '';
              
              modalBox.classList.add('opened');
              const descWrap = modalBox.querySelector('.description_wrap');
              if (descWrap) {
                descWrap.innerHTML = content;
                const newsInfo = descWrap.querySelector('.news_popup_informations');
                if (newsInfo) {
                  newsInfo.insertAdjacentHTML('afterbegin', 
                    `<div class="image"><img src="/assets/images/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="${image}"></div></div>`
                  );
                  newsInfo.insertAdjacentHTML('afterbegin',
                    `<div class="details"><div class="meta">${metaText}</div><div class="title"><h3>${title}</h3></div></div>`
                  );
                  // Call dataImages to process the new content
                  dataImages();
                }
              }
            }
          }
        });
      });
    };

    // Contact form functionality
    const initContactForm = () => {
      const sendButton = document.querySelector('.contact_form #send_message');
      
      sendButton?.addEventListener('click', (e) => {
        const nameInput = document.querySelector('.contact_form #name') as HTMLInputElement;
        const emailInput = document.querySelector('.contact_form #email') as HTMLInputElement;
        const messageInput = document.querySelector('.contact_form #message') as HTMLTextAreaElement;
        const subjectInput = document.querySelector('.contact_form #subject') as HTMLInputElement;
        const returnMessage = document.querySelector('.contact_form .returnmessage') as HTMLElement;
        const emptyNotice = document.querySelector('div.empty_notice') as HTMLElement;
        
        if (nameInput && emailInput && messageInput && returnMessage) {
          const name = nameInput.value;
          const email = emailInput.value;
          const message = messageInput.value;
          
          returnMessage.innerHTML = '';
          
          if (name === '' || email === '' || message === '') {
            e.preventDefault(); // Only prevent submission if validation fails
            if (emptyNotice) {
              emptyNotice.style.display = 'block';
              setTimeout(() => {
                emptyNotice.style.display = 'none';
              }, 2500);
            }
          }
          // If validation passes, allow the form to submit naturally to FormSubmit.co
        }
      });
    };

    // Location link functionality
    const initLocationLinks = () => {
      const locationButtons = document.querySelectorAll('.href_location');
      locationButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const address = button.textContent?.replace(/\s/g, '+') || '';
          const url = 'https://maps.google.com?q=' + address;
          window.open(url, '_blank');
        });
      });
    };

    // Anchor navigation functionality
    const initAnchorNavigation = () => {
      const anchorLinks = document.querySelectorAll('.anchor');
      anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href && href !== '#') {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });
    };

    // Owl Carousel functionality
    const initOwlCarousel = () => {
      // Testimonials carousel
      const testimonialsCarousel = document.querySelector('.elisc_tm_testimonials .owl-carousel');
      if (testimonialsCarousel && typeof window !== 'undefined') {
        // Simple carousel simulation without jQuery
        let currentSlide = 0;
        const slides = testimonialsCarousel.querySelectorAll('li');
        const totalSlides = slides.length;
        
        if (totalSlides > 1) {
          // Create owl-dots container
          const testimonialsContainer = document.querySelector('.elisc_tm_testimonials');
          let dotsContainer = testimonialsContainer?.querySelector('.owl-dots');
          
          if (!dotsContainer && testimonialsContainer) {
            dotsContainer = document.createElement('div');
            dotsContainer.className = 'owl-dots';
            testimonialsContainer.appendChild(dotsContainer);
            
            // Create dots for each slide
            for (let i = 0; i < totalSlides; i++) {
              const dot = document.createElement('div');
              dot.className = `owl-dot ${i === 0 ? 'active' : ''}`;
              const span = document.createElement('span');
              dot.appendChild(span);
              dotsContainer.appendChild(dot);
              
              // Add click event to dot
              dot.addEventListener('click', () => {
                currentSlide = i;
                showSlide(currentSlide);
                updateDots(i);
              });
            }
          }
          
          const showSlide = (index: number) => {
            slides.forEach((slide, i) => {
              const slideEl = slide as HTMLElement;
              slideEl.style.display = i === index ? 'block' : 'none';
            });
          };
          
          const updateDots = (activeIndex: number) => {
            const dots = dotsContainer?.querySelectorAll('.owl-dot');
            dots?.forEach((dot, i) => {
              if (i === activeIndex) {
                dot.classList.add('active');
              } else {
                dot.classList.remove('active');
              }
            });
          };
          
          showSlide(0);
          
          const autoSlide = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
            updateDots(currentSlide);
          }, 5000);
          
          // Store interval reference for cleanup
          (testimonialsCarousel as HTMLElement & { autoSlideInterval?: NodeJS.Timeout }).autoSlideInterval = autoSlide;
        }
      }
      
      // Partners carousel
      const partnersCarousel = document.querySelector('.elisc_tm_partners .owl-carousel');
      if (partnersCarousel) {
        let currentPartnerSlide = 0;
        const partnerSlides = partnersCarousel.querySelectorAll('li');
        const totalPartnerSlides = partnerSlides.length;
        
        if (totalPartnerSlides > 3) {
          const showPartnerSlides = (startIndex: number) => {
            partnerSlides.forEach((slide, i) => {
              const isVisible = i >= startIndex && i < startIndex + 3;
              const slideEl = slide as HTMLElement;
              slideEl.style.display = isVisible ? 'block' : 'none';
            });
          };
          
          showPartnerSlides(0);
          
          setInterval(() => {
            currentPartnerSlide = (currentPartnerSlide + 1) % (totalPartnerSlides - 2);
            showPartnerSlides(currentPartnerSlide);
          }, 3000);
        }
      }
    };

    // Portfolio filtering (Isotope alternative)
    const initPortfolioFilter = () => {
      const filterButtons = document.querySelectorAll('.elisc_tm_portfolio .portfolio_filter ul li a');
      const portfolioItems = document.querySelectorAll('.elisc_tm_portfolio .portfolio_list ul li');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('current'));
          // Add active class to clicked button
          button.classList.add('current');
          
          const filterValue = button.getAttribute('data-filter');
          
          portfolioItems.forEach(item => {
            const itemElement = item as HTMLElement;
            if (filterValue === '*' || item.classList.contains(filterValue?.replace('.', '') || '')) {
              itemElement.style.display = 'block';
              itemElement.style.opacity = '1';
            } else {
              itemElement.style.display = 'none';
              itemElement.style.opacity = '0';
            }
          });
        });
      });
    };

    // Sticky elements functionality
    const initStickyElements = () => {
      const stickyElements = document.querySelectorAll('.elisc_tm_sticky');
      
      const handleScroll = () => {
        stickyElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const isSticky = rect.top <= 0;
          
          if (isSticky) {
            element.classList.add('stuck');
          } else {
            element.classList.remove('stuck');
          }
        });
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    };

    // One page navigation
    const initOnePageNav = () => {
      // Target both sidebar and mobile menu navigation
      const sidebarNavLinks = document.querySelectorAll('.elisc_tm_sidebar .anchor_nav li');
      const mobileNavLinks = document.querySelectorAll('.elisc_tm_mobile_menu .anchor_nav li');
      const allNavLinks = [...sidebarNavLinks, ...mobileNavLinks];
      const sections = document.querySelectorAll('.elisc_tm_section[id]');
      
      const updateActiveNav = () => {
        let current = 'home'; // Default to home
        
        sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionHeight = section.clientHeight;
          
          // Check if section is in viewport (with some offset)
          if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
            current = section.getAttribute('id') || 'home';
          }
        });
        
        // Update active states for all navigation links
        allNavLinks.forEach(navItem => {
          const link = navItem.querySelector('a');
          if (link) {
            const href = link.getAttribute('href');
            navItem.classList.remove('current');
            if (href === `#${current}`) {
              navItem.classList.add('current');
            }
          }
        });
        
        // Update React state
        setActiveSection(current);
      };
      
      window.addEventListener('scroll', updateActiveNav);
      updateActiveNav(); // Initial check
      
      // Smooth scroll for navigation links
      allNavLinks.forEach(navItem => {
        const link = navItem.querySelector('a');
        if (link) {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
              const target = document.querySelector(href);
              if (target) {
                // Remove current class from all nav items
                allNavLinks.forEach(item => item.classList.remove('current'));
                // Add current class to clicked item
                navItem.classList.add('current');
                
                // Smooth scroll to target
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Update React state
                const sectionId = href.replace('#', '');
                setActiveSection(sectionId);
                
                // Close mobile menu if open
                setMobileMenuOpen(false);
              }
            }
          });
        }
      });
    };

    // Scrollable menu functionality
    const initScrollableMenu = () => {
      const menu = document.querySelector('.elisc_tm_header .menu');
      if (menu) {
        const menuItems = menu.querySelectorAll('ul li');
        let totalWidth = 0;
        
        menuItems.forEach(item => {
          totalWidth += item.clientWidth;
        });
        
        if (totalWidth > menu.clientWidth) {
          menu.classList.add('scrollable');
        }
      }
    };

    // Page transition effects
    const initPageTransition = () => {
      const body = document.body;
      
      // Add page loaded class after initial load
      setTimeout(() => {
        body.classList.add('page-loaded');
      }, 100);
      
      // Handle internal link transitions
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      internalLinks.forEach(link => {
        link.addEventListener('click', () => {
          body.classList.add('page-transitioning');
          setTimeout(() => {
            body.classList.remove('page-transitioning');
          }, 500);
        });
      });
    };

    // Trigger menu functionality
    const initTriggerMenu = () => {
      const trigger = document.querySelector('.elisc_tm_trigger');
      const menu = document.querySelector('.elisc_tm_mobile_menu');
      const overlay = document.querySelector('.elisc_tm_mobile_menu .menu_overlay');
      
      if (trigger && menu) {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          trigger.classList.toggle('active');
          menu.classList.toggle('opened');
          document.body.classList.toggle('menu-opened');
        });
        
        overlay?.addEventListener('click', () => {
          trigger.classList.remove('active');
          menu.classList.remove('opened');
          document.body.classList.remove('menu-opened');
        });
      }
    };

    // Initialize all functions
    initModalbox();
    initMovingBox();
    initCursor();
    initExperiencePopup();
    initServicePopup();
    initPortfolioPopup();
    initNewsPopup();
    initContactForm();
    initLocationLinks();
    initAnchorNavigation();
    initOwlCarousel();
    initPortfolioFilter();
    initStickyElements();
    initOnePageNav();
    initScrollableMenu();
    initPageTransition();
    initTriggerMenu();
    
    // Initialize data images with a slight delay to ensure DOM is ready
    setTimeout(() => {
      dataImages();
    }, 100);

    // Magnific Popup functionality (simplified)
    const initMagnificPopup = () => {
      // Image popup
      const imageLinks = document.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]');
      imageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href) {
            const popup = document.createElement('div');
            popup.className = 'mfp-bg mfp-ready';
            popup.innerHTML = `
              <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor">
                <div class="mfp-container">
                  <div class="mfp-content">
                    <div class="mfp-figure">
                      <div class="mfp-close">×</div>
                      <div class="mfp-img">
                        <img class="mfp-img" src="${href}" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
            document.body.appendChild(popup);
            
            const closeBtn = popup.querySelector('.mfp-close');
            const bg = popup;
            
            const closePopup = () => {
              document.body.removeChild(popup);
            };
            
            closeBtn?.addEventListener('click', closePopup);
            bg.addEventListener('click', (e) => {
              if (e.target === bg) closePopup();
            });
          }
        });
      });
      
      // YouTube popup
      const youtubeLinks = document.querySelectorAll('a[href*="youtube.com"], a[href*="youtu.be"]');
      youtubeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href) {
            let videoId = '';
            if (href.includes('youtube.com')) {
              videoId = href.split('v=')[1]?.split('&')[0] || '';
            } else if (href.includes('youtu.be')) {
              videoId = href.split('youtu.be/')[1]?.split('?')[0] || '';
            }
            
            if (videoId) {
              const popup = document.createElement('div');
              popup.className = 'mfp-bg mfp-ready';
              popup.innerHTML = `
                <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor">
                  <div class="mfp-container">
                    <div class="mfp-content">
                      <div class="mfp-iframe-scaler">
                        <div class="mfp-close">×</div>
                        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              `;
              document.body.appendChild(popup);
              
              const closeBtn = popup.querySelector('.mfp-close');
              const bg = popup;
              
              const closePopup = () => {
                document.body.removeChild(popup);
              };
              
              closeBtn?.addEventListener('click', closePopup);
              bg.addEventListener('click', (e) => {
                if (e.target === bg) closePopup();
              });
            }
          }
        });
      });
      
      // Vimeo popup
      const vimeoLinks = document.querySelectorAll('a[href*="vimeo.com"]');
      vimeoLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href) {
            const videoId = href.split('vimeo.com/')[1]?.split('?')[0] || '';
            
            if (videoId) {
              const popup = document.createElement('div');
              popup.className = 'mfp-bg mfp-ready';
              popup.innerHTML = `
                <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor">
                  <div class="mfp-container">
                    <div class="mfp-content">
                      <div class="mfp-iframe-scaler">
                        <div class="mfp-close">×</div>
                        <iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1" frameborder="0" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              `;
              document.body.appendChild(popup);
              
              const closeBtn = popup.querySelector('.mfp-close');
              const bg = popup;
              
              const closePopup = () => {
                document.body.removeChild(popup);
              };
              
              closeBtn?.addEventListener('click', closePopup);
              bg.addEventListener('click', (e) => {
                if (e.target === bg) closePopup();
              });
            }
          }
        });
      });
      
      // SoundCloud popup
      const soundcloudLinks = document.querySelectorAll('a[href*="soundcloud.com"]');
      soundcloudLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href) {
            const popup = document.createElement('div');
            popup.className = 'mfp-bg mfp-ready';
            popup.innerHTML = `
              <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor">
                <div class="mfp-container">
                  <div class="mfp-content">
                    <div class="mfp-iframe-scaler">
                      <div class="mfp-close">×</div>
                      <iframe src="https://w.soundcloud.com/player/?url=${encodeURIComponent(href)}&auto_play=true" frameborder="0"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            `;
            document.body.appendChild(popup);
            
            const closeBtn = popup.querySelector('.mfp-close');
            const bg = popup;
            
            const closePopup = () => {
              document.body.removeChild(popup);
            };
            
            closeBtn?.addEventListener('click', closePopup);
            bg.addEventListener('click', (e) => {
              if (e.target === bg) closePopup();
            });
          }
        });
      });
    };

    // Animate on scroll functionality
    const initAnimateOnScroll = () => {
      const animatedElements = document.querySelectorAll('.wow, [data-aos], .animate-on-scroll');
      
      const isElementInViewport = (element: Element) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };
      
      const isElementPartiallyInViewport = (element: Element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        return (
          rect.bottom >= 0 &&
          rect.right >= 0 &&
          rect.top <= windowHeight &&
          rect.left <= windowWidth
        );
      };
      
      const handleScroll = () => {
        animatedElements.forEach(element => {
          if (isElementPartiallyInViewport(element) && !element.classList.contains('animated')) {
            element.classList.add('animated');
            
            // Add specific animation classes based on data attributes
            const animationType = element.getAttribute('data-animation') || 
                                element.getAttribute('data-aos') || 
                                'fadeInUp';
            
            element.classList.add(animationType);
            
            // Trigger any custom animations
            if (element.classList.contains('elisc_tm_counter')) {
              const counter = element.querySelector('.number');
              if (counter) {
                const target = parseInt(counter.getAttribute('data-to') || '0');
                const duration = parseInt(counter.getAttribute('data-speed') || '2000');
                
                let current = 0;
                const increment = target / (duration / 16);
                
                const updateCounter = () => {
                  current += increment;
                  if (current < target) {
                    counter.textContent = Math.floor(current).toString();
                    requestAnimationFrame(updateCounter);
                  } else {
                    counter.textContent = target.toString();
                  }
                };
                
                updateCounter();
              }
            }
          }
        });
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    };

    // Progress bar functionality
    const initProgressBars = () => {
      const progressBars = document.querySelectorAll('.elisc_tm_progress');
      
      const animateProgressBar = (progressBar: Element) => {
        const progressInner = progressBar.querySelector('.progress_inner');
        const numberSpan = progressBar.querySelector('.number span');
        
        if (progressInner && numberSpan) {
          const percentage = numberSpan.textContent?.replace('%', '') || '0';
          const targetWidth = parseInt(percentage);
          
          let currentWidth = 0;
          const increment = targetWidth / 60; // 60 frames for smooth animation
          
          const updateProgress = () => {
            currentWidth += increment;
            if (currentWidth < targetWidth) {
              (progressInner as HTMLElement).style.width = currentWidth + '%';
              requestAnimationFrame(updateProgress);
            } else {
              (progressInner as HTMLElement).style.width = targetWidth + '%';
            }
          };
          
          updateProgress();
        }
      };
      
      const handleScroll = () => {
        progressBars.forEach(progressBar => {
          const rect = progressBar.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible && !progressBar.classList.contains('animated')) {
            progressBar.classList.add('animated');
            animateProgressBar(progressBar);
          }
        });
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    };

    // Initialize all new functions
    initMagnificPopup();
    initAnimateOnScroll();
    initProgressBars();

    // Data images functionality
    const dataImages = () => {
      const elements = document.querySelectorAll('[data-img-url]');
      elements.forEach((element) => {
        const imgUrl = element.getAttribute('data-img-url');
        if (imgUrl) {
          (element as HTMLElement).style.backgroundImage = `url(${imgUrl})`;
        }
      });
    };

    // SVG functionality
    const svgInline = () => {
      const svgElements = document.querySelectorAll('img.svg');
      svgElements.forEach((img) => {
        const imgID = img.getAttribute('id');
        const imgClass = img.getAttribute('class');
        const imgURL = img.getAttribute('src');

        if (imgURL) {
          fetch(imgURL)
            .then(response => response.text())
            .then(data => {
              const parser = new DOMParser();
              const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
              
              if (svg) {
                if (imgID) svg.setAttribute('id', imgID);
                if (imgClass) svg.setAttribute('class', imgClass.replace('svg', ''));
                svg.removeAttribute('xmlns:a');
                
                if (img.parentNode) {
                  img.parentNode.replaceChild(svg, img);
                }
              }
            })
            .catch(error => console.log('Error loading SVG:', error));
        }
      });
    };

    // Moving box animation
    const movingBox = () => {
      const elements = document.querySelectorAll('.moving_effect');
      elements.forEach((element) => {
        const dataValue = element.getAttribute('data-value');
        if (dataValue) {
          (element as HTMLElement).style.transform = `translate3d(0, ${dataValue}px, 0)`;
        }
      });
    };

    // Animate on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate_element');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          element.classList.add('animated', 'fadeInUp');
        }
      });
    };

    // Text animation for cd-headline
    const animateHeadline = () => {
      const headlines = document.querySelectorAll('.cd-headline');
      const animationDelay = 2500;
      
      headlines.forEach((headline) => {
        const words = headline.querySelectorAll('.cd-words-wrapper b');
        let width = 0;
        
        // Calculate the width of the longest word
        words.forEach((word) => {
          const wordWidth = (word as HTMLElement).offsetWidth;
          if (wordWidth > width) width = wordWidth;
        });
        
        // Set the width of cd-words-wrapper
        const wrapper = headline.querySelector('.cd-words-wrapper') as HTMLElement;
        if (wrapper) {
          wrapper.style.width = width + 'px';
        }
        
        // Start animation
        setTimeout(() => {
          const firstWord = headline.querySelector('.is-visible');
          if (firstWord) {
            hideWord(firstWord as HTMLElement);
          }
        }, animationDelay);
      });
    };
    
    const hideWord = (word: HTMLElement) => {
      const nextWord = takeNext(word);
      
      word.classList.remove('is-visible');
      word.classList.add('is-hidden');
      
      setTimeout(() => {
        showWord(nextWord);
      }, 300);
    };
    
    const showWord = (word: HTMLElement) => {
      word.classList.remove('is-hidden');
      word.classList.add('is-visible');
      
      setTimeout(() => {
        hideWord(word);
      }, 2500);
    };
    
    const takeNext = (word: HTMLElement): HTMLElement => {
      const nextWord = word.nextElementSibling as HTMLElement;
      if (nextWord) {
        return nextWord;
      } else {
        const parent = word.parentElement;
        if (parent) {
          return parent.querySelector('b') as HTMLElement;
        }
      }
      return word;
    };

    // Initialize functions
    svgInline();
    movingBox();
    animateOnScroll();
    animateHeadline();

    // Add scroll listener
    const handleScroll = () => {
      animateOnScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1040) {
        setMobileMenuOpen(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Show all sections first
    const sections = document.querySelectorAll('.elisc_tm_section');
    sections.forEach(section => {
      section.classList.remove('hidden');
      section.classList.remove('active');
      section.classList.add('active');
    });
    setMobileMenuOpen(false);
    
    // Add animation classes
    const currentSection = document.querySelector('.elisc_tm_section.active');
    const newSection = document.getElementById(sectionId);
    
    if (currentSection && newSection && currentSection !== newSection) {
      currentSection.classList.remove('active');
      currentSection.classList.add('animated', 'fadeOutLeft');
      
      setTimeout(() => {
        currentSection.classList.remove('animated', 'fadeOutLeft');
        newSection.classList.add('active', 'animated', 'fadeInRight');
        
        setTimeout(() => {
          newSection.classList.remove('animated', 'fadeInRight');
        }, 500);
      }, 300);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return {
    activeSection,
    mobileMenuOpen,
    isLoaded,
    handleSectionChange,
    toggleMobileMenu,
    setActiveSection
  };
};

export default useEliscTemplate;