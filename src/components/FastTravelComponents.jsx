import React from 'react';
import { navLink } from "../data";
import FastTravelComponent from './FastTravelComponent';

const FastTravelComponents = () => {
  return (
    <>
        <div id='aftc' className="fixed bottom-[30%] right-0 flex flex-col gap-3 m-2">

            <div id='ft-outer' className="w-4 h-4 flex justify-center items-center">
                <a href="#origin">
                    <div id='ft-inner' className="w-3 h-3"></div>
                </a>
            </div>
              
            {navLink.map(navLink => (
            <FastTravelComponent key={ navLink.id } navLink={ navLink } />
            ))}
        
        </div>
    </>
  )
}

export default FastTravelComponents