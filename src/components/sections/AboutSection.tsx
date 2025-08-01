'use client';

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <div className={`elisc_tm_section ${className || ''}`} id="about">
      <div className="elisc_tm_about">
        <div className="tm_content">
          <div className="elisc_tm_biography">
            <div className="left">
              <div className="title">
                <span className="mini">- Nice to meet you!</span>
                <h3 className="name">Anwar Abdullah</h3>
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
                <p>Hello there! My name is <span className="yellowColor">Anwar Abdullah</span>. I am a web designer &amp; developer, and I&apos;m very passionate and dedicated to my work.</p>
                <p>With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <span>Age</span>
                    <span>25</span>
                  </li>
                  <li>
                    <span>Mail</span>
                    <span><a href="mailto:aannwaran@gmail.com">aannwaran@gmail.com</a></span>
                  </li>
                  <li>
                    <span>Phone</span>
                    <span><a href="tel:+62 877 9119 4987">+62 877 9119 4987</a></span>
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
  );
}