import React from 'react';

const ProjectPage = ({ p }) => {
  return (
    <>
      <div class="mb-6 lg:mb-0">
        <div id="innards" class="lp-innards relative block bg-white dark:bg-[#1F2937] rounded-lg shadow-lg">
          <div class="flex">
            <div
              class="lp-img relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img id='' src={ p.img } class="lp-img-1 w-full" />
              <img id='' src={ p.img2 } class="lp-img-2 w-full" />
              <a href={ p.url } target="blank">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0"
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                ></div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="font-bold text-lg mb-3">{ p.title }</h5>
            <p class="mb-4 pb-2">{ p.desc }</p>
            <a
              href={ p.url } target="blank"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 bg-[#2c5282] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:text-[#2c5282] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              id={ p.id }
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
