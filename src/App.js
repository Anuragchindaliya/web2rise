import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
