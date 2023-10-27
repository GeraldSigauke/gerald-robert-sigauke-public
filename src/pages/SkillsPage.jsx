import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaSass } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiTypescript } from 'react-icons/si';
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbBrandNextjs, TbBrandPhp, TbBrandPython, TbBrandBootstrap, TbBrandReactNative } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';
import { SkillBar } from 'react-skills';

const SkillsPage = () => {
  return (
    <>
      <section className='mx-6 text-gray-800'>
        <div id="" class="block rounded-lg">
          <div class="flex flex-wrap items-center">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-6/12">
              <div class="px-6 py-12 md:px-12 text-center">
                <h2 class="text-2xl font-bold mb-4 text-gray-500 text-center">Coding <u class="text-[#2c5282]">Languages</u></h2>
                <div className="" style={{ display: "flex", justifyContent: "center" }}>
                  <p class="uppercase text-[#2c5282] font-bold mb-6 flex items-center">
                    <TbBrandHtml5 className='mr-3 w-6 h-6 hover:text-red-400' />
                    <TbBrandCss3 className='mr-3 w-6 h-6 hover:text-[#264de4]' />
                    <TbBrandJavascript className='mr-3 w-6 h-6 hover:text-[#61DBFB]' />
                    <GrMysql className='mr-3 w-6 h-6 hover:text-[#00758f]' />
                    <TbBrandPhp className='mr-3 w-6 h-6 hover:text-[#474a8a]' />
                    <TbBrandPython className='mr-3 w-6 h-6 hover:text-[#4b8bbe]' />
                    <FaJava className='mr-3 w-6 h-6 hover:text-[#f89820]' />
                    <SiTypescript className='w-6 h-6 hover:text-[#007acc]' />
                  </p>
                </div>
                <div className="skills">
                  <div className="mb-2">
                    <SkillBar name="HTML" level={90} color="red" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="CSS" level={90} color="#264de4" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="Javascript" level={80} color="#61DBFB" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="SQL" level={50} color="#00758f" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="PHP" level={50} color="#474a8a" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="Python" level={50} color="#4b8bbe" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="Java" level={50} color="#f89820" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="Typescript" level={25} color="#007acc" />
                  </div>
                </div>

              </div>
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-6/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="text-2xl font-bold mb-4 text-gray-500 text-center">Frameworks & <u class="text-[#2c5282]">More</u></h2>
                <div className="" style={{ display: "flex", justifyContent: "center" }}>
                  <p class="uppercase text-[#2c5282] font-bold mb-6 flex items-center">
                    <SiMongodb className='mr-3 w-6 h-6 hover:text-[#4db33d]' />
                    <SiExpress className='mr-3 w-6 h-6 hover:text-[#3c873a]' />
                    <FaReact className='mr-3 w-6 h-6 hover:text-[000080]' />
                    <FaNodeJs className='mr-3 w-6 h-6 hover:text-[#303030]' />
                    <SiTailwindcss className='mr-3 w-6 h-6 hover:text-[#667eea]' />
                    <TbBrandReactNative className='mr-3 w-6 h-6 hover:text-[#00ffff]' />
                    <FaSass className='mr-3 w-6 h-6 hover:text-[#ff69b4]' />
                    <TbBrandBootstrap className='w-6 h-6 hover:text-[#3b71ca]' />
                    {/* <TbBrandNextjs className='mr-3 w-6 h-6' /> */}
                  </p>
                </div>
                <div className="skills">
                  <div className="mb-2">
                    <SkillBar name="Mongo DB" level={60} color="#4db33d" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="Express Js" level={50} color="#3c873a" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="React Js" level={70} color="#000080" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="Node Js" level={50} color="#303030" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="Tailwind CSS" level={85} color="#667eea" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="React Native" level={55} color="#00ffff" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="SCSS" level={50} color="#ff69b4" />
                  </div>
                  <div className="mb-2">
                    <SkillBar name="Bootstrap" level={50} color="#3b71ca" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>   
      </section>
    </>
  )
}

export default SkillsPage