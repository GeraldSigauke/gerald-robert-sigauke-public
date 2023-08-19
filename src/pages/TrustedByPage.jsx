import React from 'react';
import LogoCloud from "../components/LogoCloud";
import { logoClouds } from "../data";

const TrustedByPage = () => {
  return (

    <>
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 px-6 mx-auto">
        
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-700">
          <h2 class="text-3xl font-bold mb-12 text-center">Trusted <u class="text-[#2c5282]">By</u></h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                  
            {logoClouds.map(logoCloud => (
              <LogoCloud key={logoCloud.id} logoCloud={logoCloud} />
            ))}

          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
        
      </div>
      {/* <!-- Container for demo purpose --> */}
    </>
  )
}

export default TrustedByPage