import "./App.css";
import Navbar from "./Components/Navbar";
import Sort from "./Components/Sort";
import  Slider  from "./Components/Slider";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { Route, Routes } from "react-router-dom";
import View from "./Pages/View";
import Favourite from "./Pages/Favourite";

function Root() {
  return (
    <>
      <Navbar />
      <Sort />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/favourite" element={<Favourite/>}/>
        <Route path="/view/:id" element={<View/>}/>
      </Routes>
    </>
  );
}

export default Root;
