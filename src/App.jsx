import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";

const App = () => {
  return (
    <>
      <Header></Header>

      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Qualification></Qualification>
        <Work></Work>
        {/* <Testimonials></Testimonials> */}
        <Contact></Contact>
      </main>

      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  );
};

export default App;
