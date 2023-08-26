import React from 'react';
import { ps } from '../data';

const Buttons = ({ setItem, categories }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }} className="">
        {/* {categories.map((Val, id) => {
          return (
            <a
              class="inline-block px-7 py-3 mr-2 bg-[#2c5282] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="/cv.pdf"
              target="blank"
              role="button"
              key={ id }
            >
              { Val }
            </a>
          );
        })} */}
        <a
          class="inline-block
           mr-2 bg-[#2c5282] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="/cv.pdf"
          target="blank"
          role="button"
          onClick={ () => setItem(ps) }
        >
          ALL
        </a>        
      </div>      
    </>
  );
};

export default Buttons;