import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.behance.net/adityanarayan4">
          <FontAwesomeIcon icon={faBehance} />
        </a>
        <a href="https://www.instagram.com/adityanarayank_/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/aditya-narayan-607bb5153/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
