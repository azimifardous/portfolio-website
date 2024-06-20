import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ projectsRef }) => {
  return (
    <div id="projects" ref={projectsRef} className="mt-20">
      <div className="grid grid-cols-3 gap-5 text-myGray p-6 glassy">
        <div className="col-span-1">
          <img
            src="../src/assets/gamehub.png"
            alt="GameHub"
            className="rounded-lg opacity-50"
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap gap-2">
            <h3 className="font-bold title mr-1">
              Build the RAWG Clone (GameHub)
            </h3>
            <span className="arrow">
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </div>
          <p className="text-sm opacity-70">
            This application utilizes the RAWG API for fetching game data,
            allowing users to explore and discover various games easily. This
            project serves as an educational initiative to understand
            TypeScript’s benefits in web development and enhances skills in
            building modern web applications.
          </p>
          <div className="flex justify-start items-center mt-4 text-xs flex-wrap gap-2">
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              Vite
            </span>
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              Typescript
            </span>
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              React
            </span>
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              Chakra UI
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-2 gap-5 text-myGray p-6 glassy">
        <div className="col-span-1">
          <img
            src="../src/assets/noteApp.png"
            alt="NoteApp"
            className="rounded-lg opacity-50"
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap gap-2">
            <h3 className="font-bold title mr-1">Build a Note App</h3>
            <span className="arrow">
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </div>
          <p className="text-sm opacity-70">
            NoteApp is a simple web application that allows users to create and
            manage their notes. Users can create notes with custom content and
            colors, view their existing notes, update, and delete their notes as
            required.
          </p>
          <div className="flex justify-start items-center mt-4 text-xs flex-wrap gap-2">
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              React
            </span>
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              Node.js
            </span>
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              MongoDB
            </span>
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              TailwindCSS
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-2 gap-5 text-myGray p-6 glassy">
        <div className="col-span-1">
          <img
            src="../src/assets/memoryCard.png"
            alt="MemoryCard Game"
            className="rounded-lg opacity-50"
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap gap-2">
            <h3 className="font-bold title mr-1">
              Build a MemoryCards Game - Flipping Tiles
            </h3>
            <span className="arrow">
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </div>
          <p className="text-sm opacity-70">
            In this game, you will need to find and match similar components by
            flipping over cards with various images on them. Remembering the
            cards' positions is key to finding matching pairs as the game starts
            with all cards face down. Locate matching pairs amongst the cards to
            win. Uncovering two cards that do not match means they will be
            flipped back over, and you need to continue searching for matching
            pairs.
          </p>
          <div className="flex justify-start items-center mt-4 text-xs flex-wrap gap-2">
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              Java
            </span>
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              JavaFX
            </span>
            <span className="rounded-[15px] mr-2 bg-secondary text-primary py-1 px-4">
              CSS
            </span>
          </div>
        </div>
      </div>
      <div className="flex text-myGray mt-10 hover:text-primary hover:cursor-pointer transition-all resume">
        <p className="mr-2">View All Projects</p>
        <span className="arrow">
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      </div>
    </div>
  );
};

export default Projects;
