import Footer from "./Footer";
import { Header } from "./LandingElements/Header";
import { ThemeProvider } from "./LandingElements/ThemeContext";
import Projects from "./Projects";

export default function ProjectsView() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Projects />
        <Footer />
      </ThemeProvider>
    </>
  );
}
