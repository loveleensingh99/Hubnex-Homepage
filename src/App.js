import "./App.css";
import Home from "./components/Home/Home";

import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Page404 from "./components/Page404";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/*" element={<Page404></Page404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
