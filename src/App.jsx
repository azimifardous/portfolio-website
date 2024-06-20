import Header from "./components/Header";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center h-full p-6 xl:pl-20">
      <div className="lg:flex lg:flex-col lg:justify-center lg:sticky lg:top-0 lg:bottom-0 lg:h-screen overflow-hidden col-span-1 justify-self-start">
        <Header
          aboutRef={aboutRef}
          experiencesRef={experiencesRef}
          projectsRef={projectsRef}
        />
      </div>
      <div className="col-span-2 overflow-y-auto lg:w-[600px] text-justify lg:mt-20">
        <About aboutRef={aboutRef} />
        <Experiences experiencesRef={experiencesRef} />
        <Projects projectsRef={projectsRef} />
      </div>
    </div>
  );
}

export default App;
