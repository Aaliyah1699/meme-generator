import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarespace, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <FontAwesomeIcon
          icon={faSquarespace}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        <h1 className="header-title">Meme Generator</h1>
      </div>
      <div className="header-right">
        <h3 className="credit">© Aaliyah Montgomery</h3>
        <a
          href="https://github.com/Aaliyah1699/meme-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
