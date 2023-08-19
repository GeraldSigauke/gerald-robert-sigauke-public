import React from 'react';
import { images } from '../constants';
import { RiWhatsappFill } from 'react-icons/ri';

const Team = () => {
  return (
    <>
      {/* Container for demo purpose */}
      <div id="team" class="container my-24 px-6 mx-auto">
        {/* Section: Design Block */}
        <section class="mb-2 text-center">
          <h2 class="text-3xl font-bold mb-12">
            Meet the <u class="text-[#2c5282]">Team</u>
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-xl-12">
            <div id="member" class="mb-12 lg:mb-0">
              <img
                class="rounded-lg shadow-lg mb-6 mx-auto w-150"
                src={images.hpid3}
                alt="avatar"
              />
              <h5 class="text-lg font-bold mb-4">Michelle</h5>
              <p class="font-bold text-[#2c5282] mb-6">Secretary</p>
              <p class="font-bold mb-6">079 802 8421</p>
              <ul class="list-inside flex mx-auto justify-center mb-9">
                <a href="https://wa.me/+27798028421" target="_blank" class="px-2">
                 <RiWhatsappFill class="fill-[#2c5282] w-5 h-5" />
                </a>
              </ul>
            </div>
            <div id="member" class="mb-12 lg:mb-0">
              <img
                class="rounded-lg shadow-lg mb-6 mx-auto w-150"
                src={images.hpid11}
                alt="avatar"
              />
              <h5 class="text-lg font-bold mb-4">Vivien</h5>
              <p class="font-bold text-[#2c5282] mb-6">Liason</p>
              <p class="font-bold mb-6">068 085 2822</p>
              <ul class="list-inside flex mx-auto justify-center mb-9">
                <a href="https://wa.me/+27680852822" target="_blank" class="px-2">
                 <RiWhatsappFill class="fill-[#2c5282] w-5 h-5" />
                </a>
              </ul>
            </div>
            <div id="member" class="mb-12 lg:mb-0">
              <img
                class="rounded-lg shadow-lg mb-6 mx-auto w-150"
                src={images.hpid5}
                alt="avatar"
              />
              <h5 class="text-lg font-bold mb-4">Lesley</h5>
              <p class="font-bold text-[#2c5282] mb-6">Treasurer</p>
              <p class="font-bold mb-6">082 661 7265</p>
              <ul class="list-inside flex mx-auto justify-center mb-9">
                <a href="https://wa.me/+27826617265" target="_blank" class="px-2">
                 <RiWhatsappFill class="fill-[#2c5282] w-5 h-5" />
                </a>
              </ul>
            </div>
            <div id="member" class="mb-12 lg:mb-0">
              <img
                class="rounded-lg shadow-lg mb-6 mx-auto w-150"
                src={images.hpid7}
                alt="avatar"
              />
              <h5 class="text-lg font-bold mb-4">Nick</h5>
              <p class="font-bold text-[#2c5282] mb-6">Treasurer</p>
              <p class="font-bold mb-6">082 337 7480</p>
              <ul class="list-inside flex mx-auto justify-center mb-9">
                <a href="https://wa.me/+27823377480" target="_blank" class="px-2">
                 <RiWhatsappFill class="fill-[#2c5282] w-5 h-5" />
                </a>
              </ul>
            </div>
            <div id="member" class="mb-12 lg:mb-0">
              <img
                class="rounded-lg shadow-lg mb-6 mx-auto w-150"
                src={images.hpid4}
                alt="avatar"
              />
              <h5 class="text-lg font-bold mb-4">Juanita</h5>
              <p class="font-bold text-[#2c5282] mb-6">
                Creativity and Duke's Assistant
              </p>
              <p class="font-bold mb-6">076 905 2989</p>
              <ul class="list-inside flex mx-auto justify-center mb-9">
                <a href="https://wa.me/+27769052989" target="_blank" class="px-2">
                 <RiWhatsappFill class="fill-[#2c5282] w-5 h-5" />
                </a>
              </ul>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </>
  );
};

export default Team;
