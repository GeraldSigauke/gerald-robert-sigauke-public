import React from 'react';
import LandingPage from '../components/LandingPage';
import { lps } from '../data';

const LandingPagesPage = () => {
  return (
    <>
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 px-6 mx-auto">

        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-700 text-center">

          <h2 class="text-2xl font-bold mb-12 pb-4 text-center">Old Projects Based On <u class="text-[#2c5282]">YouTube</u> Tutorials</h2>

          <div class="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            
            {lps.map(lp => (
              <LandingPage key={lp.id} lp={lp} />
            ))}

          </div>

        </section>
        {/* <!-- Section: Design Block --> */}

      </div>
      {/* <!-- Container for demo purpose --> */}
    </>
  );
};

export default LandingPagesPage;
