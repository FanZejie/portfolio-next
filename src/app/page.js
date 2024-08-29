
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Qualification from "../components/qualification/Qualification";
import Work from "../components/Portfolio/Work";
import Contact from "../components/contact/Contact";
import ScrollUp from "../components/scrollup/ScrollUp";
export default function HomePage() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home/>
      <About/>
      <Skills />
      {/* <Services /> */}
      <Qualification />
      <Work />
      {/* <Testimonials /> */}
      <Contact />
    </main>

    {/* <Footer /> */}
    <ScrollUp />
    </>
  );
}
