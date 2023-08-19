import React from 'react';
import HalfStar from '../components/rating/HalfStar';
import OneStar from '../components/rating/OneStar';
import OnePlusHalfStar from '../components/rating/OnePlusHalfStar';
import TwoStars from '../components/rating/TwoStars';
import TwoPlusHalfStar from '../components/rating/TwoPlusHalfStar';
import ThreeStars from '../components/rating/ThreeStars';
import ThreePlusHalfStar from '../components/rating/ThreePlusHalfStar';
import FourStars from '../components/rating/FourStars';
import FourPlusHalfStar from '../components/rating/FourPlusHalfStar';
import FiveStars from '../components/rating/FiveStars';

const CarouselItem = ( {testimonial} ) => {
  let rating;

  switch (testimonial.rating) {
    case "0.5":
      rating=<HalfStar />;
      break;
    case "1":
      rating=<OneStar />;
      break;
    case "1.5":
      rating=<OnePlusHalfStar />;
      break;
    case "2":
      rating=<TwoStars />;
      break;
    case "2.5":
      rating=<TwoPlusHalfStar />;
      break;
    case "3":
      rating=<ThreeStars />;
      break;
    case "3.5":
      rating=<ThreePlusHalfStar />;
      break;
    case "4":
      rating=<FourStars />;
      break;
    case "4.5":
      rating=<FourPlusHalfStar />;
      break;
    case "5":
      rating=<FiveStars />;
      break;
  default:
      break;
  }

  return (
    <>
      <div class="mb-5 pb-3">
        <div class="flex justify-center mb-6">
          <img src={ testimonial.img } class="rounded-full shadow-lg w-32" />
        </div>
        <h5 class="text-lg font-bold mb-4">{ testimonial.name }</h5>
        <h6 class="font-medium text-[#2c5282] mb-4">{ testimonial.profession }</h6>
        <p class="mb-4 text-gray-500">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="quote-left"
            class="w-6 pr-2 inline-block"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
            ></path>
          </svg>
          { testimonial.testimony }
        </p>
        { rating }
      </div>
    </>
  );
};

export default CarouselItem