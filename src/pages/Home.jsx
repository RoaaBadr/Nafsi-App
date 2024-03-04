import "../design/App.css";
import Contact from "../sections/Contact.jsx";
import Header from "../sections/Header.jsx";
import Work from "../sections/Work.jsx";
import Footer from "../sections/Footer.jsx";
import About from "../sections/About.jsx";
import Testimonial from "../sections/Testimonial.jsx";
import Navbar from "../sections/Navbar.jsx";

const Layout = () => {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>
  )
};

export default Layout;