import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';

const EducationDetails = ({ degree, university, universityLink, time, address, work }) => {
  return <li className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between'>
    <div>
      <h3 className='capitalize font-bold text-large text-gray-500'>{ degree }&nbsp;<a className=' text-[#2c5282]' href={ universityLink } target='blank'>@{ university }</a></h3>
      <span className='capitalize font-medium text-gray-400'>
        { time } | { address }
      </span>
      <p className='font-medium w-full text-gray-500'>
        { work }
      </p>
    </div>
  </li>
}

const ExperienceDetails = ({ position, company, companyLink, time, address, work }) => {
  return <li className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between'>
    <div>
      <h3 className='capitalize font-bold text-large text-gray-500'>{ position }&nbsp;<a className=' text-[#2c5282]' href={ companyLink } target='blank'>@{ company }</a></h3>
      <span className='capitalize font-medium text-gray-400'>
        { time } | { address }
      </span>
      <p className='font-medium w-full text-gray-500'>
        { work }
      </p>
    </div>
  </li>
}

const RésuméPage = () => {
  return (
    <>
      <section className='text-gray-800'>
        <div id="innards" class="block shadow-lg">
              <div class="mx-6 flex flex-wrap items-center">
                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-6/12">
                  <div class="px-6 py-12 md:px-12">
                    <h2 class="text-2xl font-bold mb-4 text-gray-500">Tertiary <u class="text-[#2c5282]">Education</u></h2>
                    <p class="text-[#2c5282] font-bold mb-6 flex items-center">
                      <div id="résumé-details-1">
                        <div id="résumé-details-2">
                          <FaGraduationCap className='w-8 h-8' />
                        </div>
                      </div>
                      <div class="ml-2">
                        Computer Science Major
                      </div>
                    </p>

                    <div className="pl-6">
                      <div className="border-l-2">
                        <ul className=''>
                          <EducationDetails 
                            degree="Bachelors Degree in Computer Science"
                            university="University of the People"
                            universityLink="https://wwww.uopeople.edu"
                            time="2017-2022"
                            address="595 E. Colorado Blvd. Suite 623, Pasadena, CA 91101"
                            work="Relevent Coursework includes Programming Fundermentals, Programming 2, Databases 1, Databases 2, Web Programming 1, Web Programming 2, Software Engineering 1, Software Engineering 2, Data Structures, Comparative Programming Languages, Information Retrieval and Mobile Applications"
                          />
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-6/12">
                  <div class="px-6 py-12 md:px-12">
                    <h2 class="text-2xl font-bold mb-4 text-gray-500">Relevent Work <u class="text-[#2c5282]">Experience</u></h2>
                    <p class="text-[#2c5282] font-bold mb-6 flex items-center">
                      <div id="résumé-details-1">
                        <div id="résumé-details-2">
                          <MdOutlineWork className='w-8 h-8' />
                        </div>
                      </div>
                      <div class="ml-2">
                        Frontend web Development
                      </div>
                    </p>

                    <div className="pl-6">
                      <div className="border-l-2">
                        <ul className=''>
                          <ExperienceDetails 
                            position="Frontend Web Developer"
                            company="Oliesta Softworks"
                            companyLink="https://oliestasoftworks.netlify.app"
                            time="2022-present"
                            address="Hazyview, 1242, Mpumalanga, South Africa"
                            work="Worked as a freelance frontend web developer. Improved the visibility and brand recognition of multiple businesses and organisations such as Oliesta Fashions, Hazyview Pets in Distress, Oliesta Afterschool Care, etc. The reported average increase in the number of customers/ clients/ visitors in the first month was seventy eight percent."
                          />
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
        </div>    
      </section>
    </>
  );
};

export default RésuméPage;
