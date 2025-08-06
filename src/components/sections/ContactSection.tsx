export default function ContactSection() {
  return (
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
                <form action="https://formsubmit.co/aannwaran@gmail.com" method="POST" className="contact_form" id="contact_form">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://anwarabdullahn.github.io/#contact" />
                  <input type="hidden" name="_autoresponse" value="Thank you for your message! I will get back to you soon." />
                  <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                  <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                  <div className="first">
                    <ul>
                      <li>
                        <input id="name" name="name" type="text" placeholder="Enter your name" autoComplete="off" required />
                      </li>
                      <li>
                        <input id="email" name="email" type="email" placeholder="Your email" autoComplete="off" required />
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea id="message" name="message" placeholder="Write something..." required></textarea>
                  </div>
                  <div className="elisc_tm_button">
                    <button type="submit" id="send_message" style={{background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', outline: 'inherit', textDecoration: 'none', color: 'inherit'}}>Submit now</button>
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
  );
}