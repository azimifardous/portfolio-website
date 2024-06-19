import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
function App() {
  return (
    <div className="bg-accent h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 place-items-center h-full">
        <div className="col-span-1 mx-10 justify-self-start lg:justify-self-center lg:mx-4">
          <div>
            <h1 className="font-bold text-[30px] lg:text-[50px] text-background">
              Ahmad Azimi
            </h1>
            <h2 className="text-[15px] lg:text-[20px] text-background mt-[-10px]">
              Full-Stack Developer
            </h2>
            <p className="text-[15px] text-background mt-[10px] opacity-80">
              I create seamless, visually appealing, and <br />
              user-friendly digital solutions.
            </p>
          </div>
          <nav className="mt-10 hidden lg:block">
            <ul className="text-primary">
              <li className="flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect">
                <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
                <a href="#">ABOUT</a>
              </li>
              <li className="flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect">
                <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
                <a href="#">EXPERIENCES</a>
              </li>
              <li className="flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect">
                <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
                <a href="#">PROJECTS</a>
              </li>
              <li className="flex items-center opacity-50 hover:opacity-100 hover-effect">
                <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
                <a href="#">CONTACT ME</a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-evenly items-center mt-5 lg:mt-10 text-[25px] lg:text-[30px] text-secondary">
            <a
              href="#"
              className="lg:opacity-50 lg:hover:opacity-100 lg:transition-all"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="#"
              className="lg:opacity-50 lg:hover:opacity-100 lg:transition-all"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="#"
              className="lg:opacity-50 lg:hover:opacity-100 lg:transition-all"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
        <div className="w-[600px] col-span-2 mx-10 text-background text-justify">
          <p>
            In 2021, the coding bug bit me hard, and I dove headfirst into
            learning everything I could. Fueled by countless tutorials and a
            relentless curiosity, I've built over 50 projects from scratch.{" "}
            <span className="block mt-2">
              Now, I'm a self-taught programmer, constantly seeking new
              challenges to push my skills further. I'm passionate about the way
              code breathes life into ideas, turning ideas into reality. My
              current focus is on delving deeper into new technologies out there
              in the industry.
            </span>
            <span className="block mt-2">
              In my free time, you might find me reading manga (Japanese Comic
              Books), ride my bike or either play video games.
            </span>
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-3 gap-5 text-background p-4 transition-all glassy">
              <div className="col-span-1">
                <h3>Jan. 2021 - Jul. 2021</h3>
                <p>Melbourne, Australia</p>
              </div>
              <div className="col-span-2">
                <h3 className="font-bold">Front-end Developer, Remote</h3>
                <p>
                  I collaborated with designers to create user-friendly
                  interfaces for the 3L3Phant NFT website using HTML, CSS, and
                  JavaScript. By integrating with API endpoints, I ensured
                  real-time display of NFT metadata. Working closely with
                  back-end developers, I ensured seamless system integration and
                  conducted rigorous testing for optimal performance. This
                  project expanded my expertise in the NFT ecosystem, blockchain
                  technology, and digital asset management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
