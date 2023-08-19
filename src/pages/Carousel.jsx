import React, { useState, useEffect, useRef } from 'react';
import CarouselItem from '../components/CarouselItem';
import { testimonials } from '../data';
import { images } from '../constants';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai';

const carouselPictures = [
    "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/63853/guinea-pig-sea-pig-house-cute-guinea-pig-house-63853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

let count = 0;
let carouselInterval;

const Carousel = () => {
  const [currentIndex, setCurrectIndex] = useState(0);

  const carouselRef = useRef();

  const removeAnimation = () => {
     carouselRef.current.classList.remove('fade-anim');
  };

  const startCarousel = () => {
    carouselInterval = setInterval(() => {
         handleOnNextClick();
     }, 5000);
  };

  useEffect(() => {
     carouselRef.current.addEventListener('animationend', removeAnimation);
     carouselRef.current.addEventListener('mouseenter', pauseCarousel);
     carouselRef.current.addEventListener('mouseleave', startCarousel);

     return () => {
        clearInterval(carouselInterval);
     };

  }, []);

  const pauseCarousel = () => {
    clearInterval(carouselInterval);
  }

  const handleOnNextClick = () => {
     count = (count + 1) % carouselPictures.length;
     setCurrectIndex(count);
     carouselRef.current.classList.add('fade-anim');
 };

  const handleOnPrevClick = () => {
     const picturesLength = carouselPictures.length;
     count = (currentIndex + picturesLength - 1) % picturesLength;
     setCurrectIndex(count);
     carouselRef.current.classList.add('fade-anim');
  };

return (
<>
   {/* Container for demo purpose */}
   <div id="carousel" class="container my-24 px-6 mx-auto bg-gray-50">
      <div className='max-w-screen-xl m-auto'>
         <div id='carousel' ref={carouselRef} className='w-full select-none relative'>
            <div className='aspect-w-2 aspect-h-1' style={{ objectFit: "Content", display: "flex", justifyContent: "center" }}>
               <img className='object-fill' style={{ borderRadius: "10px" }} src={carouselPictures[currentIndex]} alt='pets' />
            </div>
            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
               <button
                  className='bg-[#D30D0D] text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
                  onClick={handleOnPrevClick}
               ><AiOutlineVerticalRight size={30} /></button>
               <button
                  className='bg-[#D30D0D] text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30} 
               /></button>
            </div>
         </div>
      </div>
   </div>
</>
)
}

export default Carousel