import React, { useState, useEffect } from "react";
// import "./index.css";
import { buttons, ps } from "../data";
import { getPokemon, filterPokemon, getProject, filterProject } from "../services/services";
export default function FilterPage() {
  const [filtredProject, setFiltredProject] = useState(null);
  useEffect(() => {
    setFiltredProject(getProject());
  }, []);

  function handleProject(e) {
    let typeProject = e.target.value;
    typeProject !== "all"
      ? setFiltredProject(filterProject(typeProject))
      : setFiltredProject(getProject());
  }

  return (
    <>
      <div id="projects-buttons">
        {buttons &&
        buttons.map((type, index) => (
          <>
            <div className="ml-[0.5%] mr-[0.5%]">
              <button class="bg-[#2c5282] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded" key={index} value={type.value} onClick={handleProject}>
              {type.name}
              </button>
            </div>
          </>
        ))}
      </div>

      {filtredProject &&
        filtredProject.map(type => (
    <>
      <div 
        // id="project-size" 
        class="mb-6 lg:mb-6"
      >
        <div id="innards" class="lp-innards relative block bg-white dark:bg-[#1F2937] rounded-lg shadow-lg">
          <div class="flex">
            <div
              class="lp-img relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img id='' src={ type.img } class="lp-img-1 w-full" />
              <img id='' src={ type.img2 } class="lp-img-2 w-full" />
              <a href={ type.url } target="blank">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0"
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                ></div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="font-bold text-lg mb-3">{ type.title }</h5>
            <p class="mb-4 pb-2">{ type.desc }</p>
            <a
              href={ type.url } target="blank"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 bg-[#2c5282] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </>
        ))}
    </>
  );
}
