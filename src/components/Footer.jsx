import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./LandingElements/ThemeContext";

const Footer = () => {
  const { darkTheme } = useContext(ThemeContext);

  const themeClass = darkTheme
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-900";

  return (
    <footer className={`bg-gray-900 text-white py-10 ${themeClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Link to="https://www.linkedin.com/in/guillermonunezfullstackwebdeveloperjr/">
            <img
              src="https://skillicons.dev/icons?i=linkedin"
              alt="LinkedIn"
              className="w-6 h-6 mr-4"
            />
          </Link>
          <Link to="https://github.com/TheTorOnionSeeker">
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
              className="w-6 h-6"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
