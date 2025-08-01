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
  );
}