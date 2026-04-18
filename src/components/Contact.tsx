import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:aliraza.prodev@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email - aliraza.prodev@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+923490455288" data-cursor="disable">
                Phone - +92 349 0455288
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Intermediate in Computer Science, GKRS College - 2022-2023
            </p>
            <p>
              BS Computer Science, Virtual University of Pakistan - In Progress
              (Expected 2028)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="mailto:aliraza.prodev@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+923490455288"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/923490455288"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
            <a
              href="https://maps.google.com/?q=Lahore,+Pakistan"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Lahore, Pakistan <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ali Raza</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
