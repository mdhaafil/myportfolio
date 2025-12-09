import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Header from './sections/Header'
import Footer from "./sections/Footer";

export default function App() {
  return (
    
<div>
      {/* SECTIONS */}
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Contact /> 
      <Footer />
    </div>
  );
}
