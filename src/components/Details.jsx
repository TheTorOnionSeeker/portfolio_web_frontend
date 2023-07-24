import { useContext } from "react";
import { ThemeContext } from "./LandingElements/ThemeContext";

export default function Details() {
  const characterDetails = {
    _id: "63c98dc07e77e43ca8404262",
    name: "Guillermo Oscar Núñez",
    image: "https://i.postimg.cc/hv6qpbrY/Profile-Image.jpg",
    role: "Fullstack Web Developer",
    education: [
      "Fullstack Web Developer at SoyHenry",
      ".NET Developer at EducacionIT",
      "Fullstack Web Developer at I.N.T.I.",
    ],
    educacion: [
      "Desarrollador Web Fullstack en SoyHenry",
      "Desarrollador .NET en EducacionIT",
      "Desarrollador Web Fullstack en I.N.T.I.",
    ],
    projects: [
      "https://your-gammer-tech.vercel.app/",
      "https://portfolio-web-guillermo-nunez.vercel.app/",
      "https://deploy-portfolio-web-backend-express.onrender.com/api/person/details",
      "https://tour-de-viajes-y-compras-javier.netlify.app/",
      "https://rick-and-m0rty.netlify.app/"
    ],
    hard_skills: [
      "Java",
      "Springboot",
      "React",
      "JavaScript",
      "Redux",
      "Node.js",
      "Express",
      "MySQL",
      "MongoDB",
      "Git",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    habilidades_tecnicas: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "JavaScript",
      "Redux",
      "PostgreSQL",
      "TailwindCSS",
      ".NET",
      "C#",
      "Java",
      "Springboot",
      "MySQL",
      "MongoDB(with mongoose)",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    languages: ["English", "Portuguese"],
    idiomas: ["Inglés", "Portugués"],
    percentage_hard_skills: [
      80, 80, 90, 90, 90, 90, 90, 70, 70, 80, 90, 70, 70,
    ],
    soft_skills: [
      "proactivity",
      "collaborative work",
      "flexibility and adaptability",
      "self-taught",
      "results-oriented profile",
      "customer orientation",
      "ability to resolve highly complex situations",
    ],
    habilidades_blandas: [
      "Proactividad",
      "trabajo colaborativo",
      "flexibilidad y adaptabilidad",
      "autodidacta",
      "perfil orientado a resultados",
      "orientación al cliente",
      "capacidad de resolución de situaciones de alta complejidad",
    ],
  };

  const renderCard = (label, value) => {
    return (
      <div
        className={`rounded shadow p-4 mb-4 ${
          darkTheme
            ? "bg-gray-900 text-white"
            : "bg-indigo-500 hover:bg-indigo-600 text-white"
        }`}
      >
        <p className="font-bold mb-1">{label}</p>
        <p>{value}</p>
      </div>
    );
  };

  const { darkTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`py-10 ${
          darkTheme ? "bg-gray-900 text-white" : "bg-indigo-900 text-white"
        }`}
      >
        <div className="mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Detalles del perfil
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="rounded overflow-hidden shadow-xl">
              <img
                src={characterDetails.image}
                alt="fotoPerfil"
                className="w-full h-auto object-cover rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full"
              />
            </div>
            <div>
              <div className="bg-indigo-500 hover:bg-indigo-600 rounded shadow p-4 mb-4">
                <p className="font-bold mb-1">
                  {renderCard("Nombre", characterDetails.name)}
                </p>
              </div>
              <div className="bg-indigo-500 hover:bg-indigo-600 rounded shadow p-4 mb-4">
                <p className="font-bold mb-1">
                  {renderCard("Rol", characterDetails.role)}
                </p>
              </div>
            </div>
            {/* Agrega más tarjetas para mostrar otros campos según sea necesario */}
          </div>
          <div className="bg-indigo-500 hover:bg-indigo-600 rounded shadow p-4 mb-4">
            <p className="font-bold mb-1">
              {renderCard("Educación:", characterDetails.educacion.join(", "))}
            </p>
          </div>
          <div className="bg-indigo-500 hover:bg-indigo-600 rounded shadow p-4 mb-4">
            <p className="font-bold mb-1">
              {renderCard(
                "Habilidades técnicas:",
                characterDetails.habilidades_tecnicas.join(", ")
              )}
            </p>
          </div>
          <div className="bg-indigo-500 hover:bg-indigo-600 rounded shadow p-4 mb-4">
            <p className="font-bold mb-1">
              {renderCard(
                "Habilidades blandas:",
                characterDetails.habilidades_blandas.join(", ")
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
