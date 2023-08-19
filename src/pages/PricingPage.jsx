/** 
body {
  background-color: hsl(0, 0%, 97%)
}
*/

import React from 'react';
import PricingPoint from '../components/PricingPoint';
import { lpp, ecp, mcsp } from '../data';

const PricingPage = () => {
  return (
    <>
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800">
          <div
            id="pricing-block-5"
            class="background-radial-gradient text-center text-white"
          >
            <h2 class="text-3xl font-bold text-center mb-12">Pricing</h2>
          </div>

          <div
            class="grid lg:grid-cols-3 px-6 md:px-12 xl:px-32"
            style={{ marginTop: '-200px' }}
          >
            <div class="p-0 py-12">
              <div id="innards" class="block rounded-lg shadow-lg bg-white h-full lg:rounded-tr-none lg:rounded-br-none">
                <div class="p-6 border-b border-gray-300 text-center">
                  <p class="uppercase mb-4 text-sm">
                    <strong>Landing Page</strong>
                  </p>
                  <h3 class="text-2xl mb-6">
                    <strong>R2500.00</strong>
                    <small class="text-gray-500 text-sm">/once off</small>
                  </h3>

                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-transparent text-[#2c5282] font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                    style={{ backgroundColor: 'hsl(0, 0%, 95%)' }}
                    data-mdb-ripple="true"
                    data-ripple-color="primary"
                  >
                    Buy
                  </button>
                </div>
                <div class="p-6">
                  <ol class="list-inside">
                    {lpp.map((pricingPoint) => (
                      <PricingPoint
                        key={pricingPoint.id}
                        pricingPoint={pricingPoint}
                      />
                    ))}
                    <li class="mb-4 flex items-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                          class="text-yellow-600 w-9 h-9 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512">
                          <path fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                          </path>
                      </svg>Plus Optional Maintanance At R250.00 Per Month (subject to yearly review)
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="p-0">
              <div id="innards" class="block rounded-lg shadow-lg bg-white h-full z-10">
                <div class="p-6 border-b border-gray-300 text-center">
                  <p class="uppercase mb-4 text-sm">
                    <strong>Ecommerce Site</strong>
                  </p>
                  <h3 class="text-2xl mb-6">
                    <strong>R4500.00</strong>
                    <small class="text-gray-500 text-sm">/once off</small>
                  </h3>

                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-[#2c5282] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  >
                    Buy
                  </button>
                </div>
                <div class="p-6">
                  <ol class="list-inside">
                    {ecp.map((pricingPoint) => (
                      <PricingPoint
                        key={pricingPoint.id}
                        pricingPoint={pricingPoint}
                      />
                    ))}
                    <li class="mb-4 flex items-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                          class="text-yellow-600 w-9 h-9 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512">
                          <path fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                          </path>
                      </svg>Plus Optional Maintanance At R250.00 Per Month (subject to yearly review)
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="p-0 py-12">
              <div id="innards" class="block rounded-lg shadow-lg bg-white h-full lg:rounded-tl-none lg:rounded-bl-none">
                <div class="p-6 border-b border-gray-300 text-center">
                  <p class="uppercase mb-4 text-sm">
                    <strong>More Custom Site</strong>
                  </p>
                  <h3 class="text-2xl mb-6">
                    <strong>R3500.00</strong>
                    <small class="text-gray-500 text-sm">/once off</small>
                  </h3>

                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-transparent text-[#2c5282] font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                    style={{ backgroundColor: 'hsl(0, 0%, 95%)' }}
                    data-mdb-ripple="true"
                    data-ripple-color="primary"
                  >
                    Buy
                  </button>
                </div>
                <div class="p-6">
                  <ol class="list-inside">
                    {mcsp.map((pricingPoint) => (
                      <PricingPoint
                        key={pricingPoint.id}
                        pricingPoint={pricingPoint}
                      />
                    ))}
                    <li class="mb-4 flex items-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                          class="text-yellow-600 w-9 h-9 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512">
                          <path fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                          </path>
                      </svg>Plus Optional Maintanance At R250.00 Per Month (subject to yearly review)
                    </li>
                  </ol>
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

export default PricingPage;
