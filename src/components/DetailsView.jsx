//import { useSelector } from "react-redux";
import Footer from "./Footer";
import { Header } from "./LandingElements/Header";
import { ThemeProvider } from "./LandingElements/ThemeContext";
import Details from "./Details";

const DetailsView = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Details />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default DetailsView;
