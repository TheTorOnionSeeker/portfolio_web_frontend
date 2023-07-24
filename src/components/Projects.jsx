import { useContext } from "react";
import { ThemeContext } from "./LandingElements/ThemeContext";

export default function Projects() {
  const projects = {
    names: [
      "Gamer Tech. Experiencia académica. Henry Bootcamp",
      "Portfolio Web personal",
      "API para portfolio personal",
      "Tour de Viajes y Compras",
      "App de Rick and Morty",
    ],
    description: [
      "Desarrollo fullstack de Proyecto Final Henry Bootcamp. Desarrollo web tanto en el backend como en el frontend.",
      "Portfolio Web personal desarrollado para aplicar conocimientos adquiridos.",
      "API para traer datos de una base de datos en MongoDB, y para consultar estos datos desde el frontend.",
      "Aplicación desarrollada para empresa de viajes y turismo. Se agregarán mejoras, conexión con un backend robusto y descentralizado que tenga su propia conexión a una base de datos, y funcionalidades nuevas.",
      "Aplicación de Rick and Morty desarrollada para aplicar conocimientos adquiridos.",
    ],
    urls: [
      "https://your-gammer-tech.vercel.app/",
      "https://portfolio-web-guillermo-nunez.vercel.app/",
      "https://deploy-portfolio-web-backend-express.onrender.com/api/person/details",
      "https://tour-de-viajes-y-compras-javier.netlify.app/",
      "https://rick-and-m0rty.netlify.app/",
    ],
  };

  const renderCard = (label, value, description, url) => {
    return (
      <div
        className={`rounded shadow p-4 mb-4 ${
          darkTheme
            ? "bg-gray-900 text-indigo-100"
            : "bg-indigo-600 text-indigo-100"
        } hover:bg-indigo-100`}
      >
        <p className="font-bold mb-1">{label}</p>
        <p>{value}</p>
        <div className={`${darkTheme?"text-gray-900":"text-indigo-600" } font-bold mb-1`}>
          <p>{description}</p>
        </div>
        <p className={`${darkTheme?"text-gray-900":"text-indigo-600" } font-bold mb-1`}>
          <a href={url} target="_blank">Ir</a>
        </p>
      </div>
    );
  };

  const { darkTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`${
          darkTheme ? "bg-gray-900 text-white" : "bg-indigo-900 text-white"
        } flex`}
      >
        <div className="mx-auto px-4 py-8">
          <div className="w-96 justify-center">
            <div className="text-center">
              <div className="bg-indigo-500 rounded shadow p-4 mb-4">
                <p className="font-bold mb-1">
                  {projects.names.map((e, index) => {
                    return renderCard("Proyecto", e, projects.description[index], projects.urls[index] );
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
