import React, { useState, useEffect } from "react";
import { buttons, ps } from "../data";
import { getProject, filterProject } from "../services/services";

const ProjectsPage = () => {
  const [item, setItem] = useState(ps);
  // Spread operator will display all the values from our category section of our data while Set will only allow the single value of each kind to be displayed
  const categories = [...new Set(ps.map((Val) => Val.category))];
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
      <div class="container my-24 px-6 mx-auto">
        <section class="mb-20 text-center">
          <h2 class="text-3xl font-bold mb-5 text-center">
            Projects I am <u class="text-[#2c5282]">proud</u> of
          </h2>

          {buttons &&
          buttons.map((type, index) => (
            <>

                <button id="blue-button" className={ type.marginBottom } key={ index } value={ type.value } onClick={ handleProject }>
                { type.name }
                </button>

            </>
          ))}
          

          <div class="grid lg:grid-cols-3 gap-6 xl:gap-x-12">

          {filtredProject &&
        filtredProject.map(type => (
          <>
            <div 
              // id="project-size" 
              class="mb-3 lg:mb-6"
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
                    class="inline-block px-6 py-2.5 bg-[#2c5282] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:text-[#2c5282] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    id={ type.id }
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}

          </div>

        </section>        
      </div>      
    </>
  )
}

export default ProjectsPage;
