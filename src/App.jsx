import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Products from "./pages/Products";
import Review from "./pages/Review";
import Footer from "./pages/Footer";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blogs />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;