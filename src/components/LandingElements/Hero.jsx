import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { ThemeContext } from "./ThemeContext";

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://w0.peakpx.com/wallpaper/786/734/HD-wallpaper-computer-science-vision.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/335/832/desktop-wallpaper-algunos-de-informatica-informatic.jpg",
    "https://e0.pxfuel.com/wallpapers/515/894/desktop-wallpaper-computer-technology-innovation.jpg",
    "https://www.gestiona.com.br/wp-content/uploads/2019/11/Valor-economico-1024x576.jpg",
    "https://www.teahub.io/photos/full/290-2909203_tecnico-en-computacion-e-informatica.jpg",
    "https://www.teahub.io/photos/full/290-2909203_tecnico-en-computacion-e-informatica.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const heroStyle = {
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "75.25vh",
  };

  const { darkTheme } = useContext(ThemeContext);

  const themeClass = darkTheme
    ? "bg-gray-900 text-white"
    : "bg-indigo-900 text-white";

  return (
    <>
      <div
        className={`bg-hero bg-no-repeat bg-cover bg-center bg-fixed ${themeClass}`}
      >
        <div style={heroStyle}>
          <div className="hero-content flex items-center justify-center text-center text-neutral-content">
            <div className="bg-gray-950/50 bg-opacity-70 p-4 rounded-lg">
              <div className=" text-white p-4 mb-3">
                <div className="bg-indigo-900 text-white py-10">
                  <div className="container mx-auto px-4">
                    <p className="text-4xl font-bold mb-6">
                      ¡Bienvenido a mi portfolio!
                    </p>
                    <p className="text-lg mb-6">
                      Aquí encontrarás información sobre mi perfil como
                      desarrollador y proyectos destacados.
                    </p>
                    <Link to="/details">
                      <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
                        Ver detalles
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
