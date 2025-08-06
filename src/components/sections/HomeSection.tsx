'use client';

interface HomeSectionProps {
  className?: string;
}

export default function HomeSection({ className }: HomeSectionProps) {
  return (
    <div className={`elisc_tm_section animated ${className || ''}`} id="home">
      <div className="elisc_tm_home">
        <div className="tm_content">
          <div className="details">
            <div className="left">
              <div className="title">
                <h3>Hi, I&apos;m <span className="blueColor">Anwar!</span></h3>
                <h3>
                  <span className="cd-headline rotate-1">
                    {/* <span className="blc">Creative</span> */}
                    <span className="cd-words-wrapper">
                      <b className="is-visible">Software Engineer</b>
                      <b>Tech Enthusiast</b>
                      <b>Fullstack Developer</b>
                      <b>Frontend Developer</b>
                      <b>Backend Developer</b>
                    </span>
                  </span>
                </h3>
                <h3>Based in Batam</h3>
              </div>
              <div className="subtitle">
                <p>I&apos;m a Batam based software engineer with <span className="blueColor">6+ years</span> of experience</p>
              </div>
              <div className="buttons">
                <div className="elisc_tm_button">
                  <a className="download-cv" href="/assets/docs/Anwar Abdullah.pdf" download="Anwar Abdullah CV.pdf">Download CV</a>
                </div>
                <div className="elisc_tm_button" data-style="border">
                  <a className="anchor" href="#contact">Let&apos;s talk</a>
                </div>
              </div>
              <div className="info">
                <ul>
                  <li><a href="tel:+62 877 9119 4987">+62 877 9119 4987</a></li>
                  <li><a href="mailto:aannwaran@gmail.com">aannwaran@gmail.com</a></li>
                  <li><a className="href_location" href="#">Batam. Kepulauan Riau, Indonesia</a></li>
                </ul>
              </div>
            </div>
            <div className="right">
              <img src="/assets/images/personals/anwar.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}