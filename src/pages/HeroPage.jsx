import React from 'react';
import { images } from '../constants';

const HeroPage = () => {
  return (
    <>
      <section id='hero' className='px-6 pt-6 md:px-6 bg-gray-50 text-gray-800 dark:bg-gray-black dark:text-gray-800 text-center lg:text-left'>
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                <div className="mt-12 lg:mt-0">
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-1">
                    <div className='typewriter'>
                      <span>Hi, I am Gerald <br /></span>
                    </div>
                  </h1>
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                    <span className="text-[#2c5282] text-3xl md:text-3xl xl:text-4xl">Frontend Developer</span>
                  </h1>
                  <p className="mb-12 text-gray-700">
                  I am a Frontend Web Developer who is currently dipping his toes in Mobile App development and Backend Web development. I am currently working as a freelance developer, but I am open to getting hired for a full time gig.
                  </p>
                  <a
                    id='blue-button'
                    class="inline-block px-7 py-3 mr-2 bg-[#2c5282] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-white hover:text-[#2c5282] hover:shadow-lg focus:bg-white focus:text-[#2c5282] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2c5282] active:text-white active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="https://geraldsigauke.github.io/gerald-robert-sigauke-cv/"
                    target="blank"
                    role="button"
                  >
                   See My CV
                  </a>
                  <a
                    id='white-button'
                    class="inline-block px-7 py-3 bg-transparent text-[#2c5282] font-medium text-sm leading-snug uppercase rounded hover:text-white hover:bg-[#2c5282] focus:bg-[#2c5282] focus:text-white focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#contactMe"
                    role="button"
                  >
                    Let's Talk
                  </a>
                </div>
                <div id="hero_pic_background" class="mb-0 lg:mb-0">
                  <img
                    src={ images.hero_pic }
                    class="w-full rounded-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
      </section>
    </>
  );
};

export default HeroPage;
