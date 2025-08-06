"use client";

interface AboutSectionProps {
  className?: string;
}

interface ExperienceItem {
  id: number;
  image: string;
  period: string;
  title: string;
  company: string;
  description: string;
  details: string[];
  altImage?: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    image: "/assets/images/experience/vouch-team.jpeg",
    altImage: "Company Offsite 2023 - Kuala Lumpur",
    period: "April, 2020 - Present",
    title: "Software Engineer",
    company: "Vouch Sg Pte. Ltd.",
    description:
      "At Vouch, I led the development and maintenance of scalable web applications and microservices in a remote-first environment. I built POS and Payment integration microservices using Nest.js (TypeScript), supported Stripe and other gateways, and maintained various Vue.js applications for hotel bookings, housekeeping, and multilingual catalogues. I also created a Core Design Component Library used across products, and implemented advanced deployment practices like feature flags. Additionally, I enhanced real-time chat with Socket.io, improved the Vouch Admin Portal, and actively used AI tools like Cursor to accelerate development. I maintained high code quality with unit tests, participated in code reviews, and worked closely with cross-functional teams including UI/UX designers and product managers.",
    details: [
      "At Vouch, I led the development and maintenance of scalable web applications and microservices in a remote-first environment. I built POS and Payment integration microservices using Nest.js (TypeScript), supported Stripe and other gateways, and maintained various Vue.js applications for hotel bookings, housekeeping, and multilingual catalogues. I also created a Core Design Component Library used across products, and implemented advanced deployment practices like feature flags. Additionally, I enhanced real-time chat with Socket.io, improved the Vouch Admin Portal, and actively used AI tools like Cursor to accelerate development. I maintained high code quality with unit tests, participated in code reviews, and worked closely with cross-functional teams including UI/UX designers and product managers.",
    ],
  },
  {
    id: 2,
    image: "/assets/images/experience/versafleet-team.jpeg",
    altImage: "Team Gatering 2019 - Singapore",
    period: "September 2019 - March 2020",
    title: "Junior Software Engineer",
    company: "Versafleet Pte. Ltd.",
    description:
      "At Versafleet, I developed features for the Admin Portal to improve task and fleet management using React.js, and contributed to the VersaDrive mobile app with React Native. I also built reusable UI components in a shared component library and integrated external systems using AWS Lambda and Node.js. Working in an Agile team, I identified product gaps and delivered solutions under tight deadlines.",
    details: [
      "At Versafleet, I developed features for the Admin Portal to improve task and fleet management using React.js, and contributed to the VersaDrive mobile app with React Native. I also built reusable UI components in a shared component library and integrated external systems using AWS Lambda and Node.js. Working in an Agile team, I identified product gaps and delivered solutions under tight deadlines.",
    ],
  },
  {
    id: 3,
    image: "",
    period: "June 2019 - September 2019",
    title: "Mobile Developer",
    company: "Business Connectivity Pte Ltd.",
    description:
      "In this short-term role, I built mobile applications using Flutter and implemented Provider for state management. I also developed RESTful APIs using Node.js and structured MySQL databases to support scalable vendor-product listings. My focus was on building reliable communication between frontend and backend components.",
    details: [
      "In this short-term role, I built mobile applications using Flutter and implemented Provider for state management. I also developed RESTful APIs using Node.js and structured MySQL databases to support scalable vendor-product listings. My focus was on building reliable communication between frontend and backend components.",
    ],
  },
  {
    id: 4,
    image: "",
    period: "October 2018 - February 2019",
    title: "Backend & Android Developer",
    company: "PT. Indonesia Villa Jaya",
    description:
      "At VillaCorp, I maintained and improved backend systems for HR modules such as payroll and attendance using PHP and MySQL. I also developed Android apps in Kotlin to let employees manage profiles, view payslips, and submit leave requests. I implemented secure authentication and collaborated with HR teams to gather requirements and enhance the system iteratively.",
    details: [
      "At VillaCorp, I maintained and improved backend systems for HR modules such as payroll and attendance using PHP and MySQL. I also developed Android apps in Kotlin to let employees manage profiles, view payslips, and submit leave requests. I implemented secure authentication and collaborated with HR teams to gather requirements and enhance the system iteratively.",
    ],
  },
  {
    id: 5,
    image: "",
    period: "October 2018 - February 2019",
    title: "Junior Programmer (Internship)",
    company: "PT. Global Teknologi Media Baru",
    description:
      "During my internship, I assisted in building Android-based applications like SANTUN, a currency exchange queue system, and BPKB Online for vehicle document verification. I worked with senior developers to understand backend structures and APIs, helped with UI/UX refinements, and contributed to debugging and deployment processes to ensure stable app performance.",
    details: [
      "During my internship, I assisted in building Android-based applications like SANTUN, a currency exchange queue system, and BPKB Online for vehicle document verification. I worked with senior developers to understand backend structures and APIs, helped with UI/UX refinements, and contributed to debugging and deployment processes to ensure stable app performance.",
    ],
  },
];

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <div className={`elisc_tm_section ${className || ""}`} id="about">
      <div className="elisc_tm_about">
        <div className="tm_content">
          <div className="elisc_tm_biography">
            <div className="left">
              <div className="title">
                <span className="mini">- Nice to meet you!</span>
                <h3 className="name">Anwar Abdullah</h3>
                <span className="job">
                  <span className="cd-headline rotate-1">
                    {/* <span className="blc">Web designer &amp;</span> */}
                    <span className="cd-words-wrapper">
                      <b className="is-visible">Software Engineer</b>
                      <b>Tech Enthusiast</b>
                      <b>Fullstack Developer</b>
                      <b>Frontend Developer</b>
                      <b>Backend Developer</b>
                    </span>
                  </span>
                </span>
              </div>
              <div className="elisc_tm_button">
                <a className="anchor" href="#portfolio">
                  Got a project?
                </a>
              </div>
            </div>
            <div className="right">
              <div className="text">
                <p>
                  Hello there! My name is{" "}
                  <span className="yellowColor">Anwar Abdullah</span>. Software
                  Engineer with over{" "}
                  <span className="yellowColor">6 years of experience</span>{" "}
                  building scalable web and mobile applications. My core
                  expertise is in JavaScript and TypeScript, working with modern
                  frameworks like React.js, Vue.js, and Node.js/Nest.js to
                  deliver reliable solutions for hospitality, logistics, and HR
                  industries.
                </p>
                <p>
                  I have contributed to startups in Singapore and Indonesia,
                  creating and maintaining microservices for POS and payment
                  gateways, developing digital concierge systems for hotels, and
                  enhancing logistics platforms.
                </p>
                <p>
                  While my primary tools are in the JavaScript ecosystem, I’m
                  always eager to learn and work with new programming languages
                  and technologies—continuously expanding my skill set beyond
                  any single tech stack.
                </p>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <span>Age</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>Mail</span>
                    <span>
                      <a href="mailto:aannwaran@gmail.com">
                        aannwaran@gmail.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>Phone</span>
                    <span>
                      <a href="tel:+62 877 9119 4987">+62 877 9119 4987</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="elisc_tm_counter hidden">
            <ul>
              <li>
                <div className="list_inner">
                  <h3>6+</h3>
                  <span>Years of Experience</span>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>20+</h3>
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
                {experienceData.map((experience) => (
                  <li key={experience.id}>
                    {experience.image && (
                      <img
                        className="popup_image"
                        src={experience.image}
                        alt={`${experience.altImage || ""}`}
                      />
                    )}
                    <div className="list_inner">
                      <div className="short">
                        <div className="job">
                          <span className="yellowColor">
                            {experience.period}
                          </span>
                          <h3>{experience.title}</h3>
                        </div>
                        <div className="place">
                          <span>{`- ${experience.company}`}</span>
                        </div>
                      </div>
                      <div className="text">
                        <p>{experience.description.length > 200 ? experience.description.substring(0, 200) + '...' : experience.description}</p>
                      </div>
                      <a className="elisc_tm_full_link" href="#"></a>
                      <div className="hidden_details">
                        <div className="descriptions">
                          {experience.details.map((detail, index) => (
                            <p key={index}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
