import Header from "./components/Header";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center h-full p-6 xl:pl-20">
      <div className="lg:flex lg:flex-col lg:justify-center lg:sticky lg:top-0 lg:bottom-0 lg:h-screen overflow-hidden col-span-1 justify-self-start">
        <Header />
      </div>
      <div className="col-span-2 overflow-y-hidden lg:w-[600px] text-justify lg:mt-20">
        <About />
        <Experiences />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
