//import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import DetailsView from "./components/DetailsView";
import ProjectsView from "./components/ProjectsView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/details" element={<DetailsView />} />
          <Route path="/projects" element={<ProjectsView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
