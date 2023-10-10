import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbBrandNextjs, } from 'react-icons/tb';

const AboutPage = () => {
  return (
    <>
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 px-6 mx-auto">
        
        {/* <!-- Section: Design Block --> */}
        <section class="mb-12 text-gray-800">
          <div id="innards" class="block rounded-lg shadow-lg bg-white">
            <div class="flex flex-wrap items-center">
              <div class="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-6/12">
                <img src="https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="PC"
                  class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
              </div>
              <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-6/12">
                <div class="px-6 py-12 md:px-12">
                  <h2 class="text-2xl font-bold mb-4 text-gray-500">About</h2>
                  <p class="uppercase text-[#2c5282] font-bold mb-6 flex items-center">
                    <SiMongodb className='mr-3 w-6 h-6' />
                    <SiExpress className='mr-3 w-6 h-6' />
                    <FaReact className='mr-3 w-6 h-6' />
                    <FaNodeJs className='mr-3 w-6 h-6' />
                    {/* <TbBrandNextjs className='mr-3 w-6 h-6' /> */}
                    <SiTailwindcss className='mr-3 w-6 h-6' />
                    <TbBrandJavascript className='mr-3 w-6 h-6' />
                    <TbBrandHtml5 className='mr-3 w-6 h-6' />
                    <TbBrandCss3 className='mr-3 w-6 h-6' />
                  </p>
                  <p class="text-gray-500 mb-6">
                    Hi there. My name is Gerald. I am a frontend web developer who is currently taking up Mobile App development and Backend Web development. I love making beautiful web apps which meet both the user and the client's neeeds.
                  </p>
                  <p class="text-gray-500 mb-6">
                    I have a Bachelors Degree in Computer Science. I have been coding for the past five years -- the last of which was spent learning React Js and the rest of the MERN stack. My desire is to be the best there is at making web apps and mobile apps.
                  </p>
                  <p class="text-gray-500">
                    My weapons of choice are Mongo DB, Express Js, React, Node Js and Tailwind CSS. Obviously, this means that I know HTML, CSS and Javascript at a more than decent level. Right now, I am mastering React Native. In the future, I wish to take up Typescript and React Native. It is worth noting that, prior to taking up the MERN stack, I -- among many other things -- learned SQL, PHP, XML, Python and Java.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
        
      </div>
      {/* <!-- Container for demo purpose --> */}
    </>
  );
};

export default AboutPage;
