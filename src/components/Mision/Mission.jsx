import { ArrowRightIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <div className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 px-6 md:px-12 lg:px-20 xl:gap-20 xl:px-24 2xl:px-20 ">

        {/* Left Section */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-start">
          <h2 className="text-5xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-6xl font-bold">
            Why choose Cashcloudy?
          </h2>
          <p className="text-sm md:text-xl  lg:text-base xl:text-lg 2xl:text-sm  font-normal xl:py-5 2xl:py-4 2xl:pr-48">
            In Bangladesh, the majority of freelancers cannot receive money through proper channels from the USA. They have to rely on unknown sources. Therefore, they don’t get their money on time even after paying fair compensation. Sometimes they lose all their money. That is why we are creating Cashcloudy to solve all these problems.
          </p>
          <Link to={'register'} className="bg-[#8C4DC3] text-white inline-flex items-center border border-md rounded-md px-3 py-2 hover:bg-[#7A3AB0] transition">
            <p className="text-base font-semibold px-2">Create an account</p>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div>
            <img 
              src="/src/assets/Feature/Video.png" 
              className="w-full md:max-w-2xl lg:h-80 xl:h-96 2xl:h-[400px] max-w-lg h-auto rounded-lg shadow-lg" 
              alt="Video Representation" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
