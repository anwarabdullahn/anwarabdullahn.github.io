import React from 'react';

interface PortfolioSectionProps {
  className?: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ className }) => {
  return (
    <div className={`elisc_tm_section ${className || ''}`} id="portfolio">
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
  );
};

export default PortfolioSection;