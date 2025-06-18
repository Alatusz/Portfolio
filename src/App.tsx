// Pages
import AboutMe from "./pages/AboutMe";
import Experirence from "./pages/Experirence";
import Skills from "./pages//Skills";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

// CSS
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopBar from "./component/TopBar";
import HomeLayout from "./component/Home/HomeLayout";

// APP
function App() {
  return (
    <Routes>
      <Route path="/" element={<TopBar />}>
        <Route index element={<HomeLayout />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/experirence" element={<Experirence />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Route>
    </Routes>
  );
}

export default App;
