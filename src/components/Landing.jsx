import { Header } from "./LandingElements/Header";
import { Hero } from "./LandingElements/Hero";
import { ThemeProvider } from "./LandingElements/ThemeContext";

const Landing = () => {
  /* const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterDetails());
  }, [dispatch]); */

  return (
    <ThemeProvider>
      <div className="font-D-DIN">
        <Header />
        <Hero />
        {/* <div className="bg-indigo-900 text-white py-10">
        <div className="container mx-auto px-4">
          <p className="text-4xl font-bold mb-6">¡Bienvenido a mi portfolio!</p>
          <p className="text-lg mb-6">
            Aquí encontrarás información sobre mi perfil como desarrollador y
            proyectos destacados.
          </p>
          <Link to="/details">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
              Ver detalles
            </button>
          </Link>
        </div>
        <Footer />
      </div> */}
      </div>
    </ThemeProvider>
  );
};

export default Landing;
