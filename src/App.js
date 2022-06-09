import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "../src/Pages/NavigationBar/NavigationBar";
import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/About/About";
import Footer from "../src/Pages/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
