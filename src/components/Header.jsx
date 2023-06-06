import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <FontAwesomeIcon
          icon="fa-brands fa-squarespace"
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
        ></a>
        <FontAwesomeIcon
          icon="fa-brands fa-github"
          size="lg"
          style={{ color: "#000000" }}
        />
      </div>
    </div>
  );
};

export default Header;
