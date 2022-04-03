import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import About from "./pages/About";
// import { About, Career, Home, Project, Services } from "./pages";
import Career from "./pages/career";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/services";
import LogoDesigining from "./pages/services/LogoDesigining";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/logo-design" element={<LogoDesigining />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
