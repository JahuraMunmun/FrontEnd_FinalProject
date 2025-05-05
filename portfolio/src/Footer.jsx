import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Jahura Akter Munmun. All rights reserved.
        </p>
        <div>
          <a
            href="https://github.com/JahuraMunmun"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/jahura-akter-munmun-004a47354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
