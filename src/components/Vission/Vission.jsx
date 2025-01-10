import { ArrowRightIcon, PlayIcon } from '@heroicons/react/16/solid';
import { ArrowUpIcon, ArrowUpLeftIcon, CloudArrowUpIcon, CloudIcon } from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Vission = () => {
    return (
        <div className="py-12 px-6 md:px-12 lg:px-14 xl:px-32 2xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-3 ">

                {/* Video Section */}
                <div className="lg:col-span-6">
                    <div className="w-full h-58   ">
                        <img 
                            src="/src/assets/Vission/Video (1).png" 
                            alt="Video Preview" 
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className=" lg:col-span-6 space-y-1 sm:space-y-6  lg:space-y-0 text-start">
                    <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-5xl 2xl:text-7xl font-bold text-[#101828] ">
                        How to receive money?
                    </h2>

                    {/* Step 1 */}
                    <div className="flex items-start space-x-4 sm:sp py-3  sm:py-0 md:py-6 lg:pt-4 xl:pt-10">
                        <ArrowRightCircleIcon className=" h-14 w-14 sm:h-12 sm:w-12 " />
                        <div>
                            <h4 className=" text-lg sm:text-3xl md:text-4xl lg:text-2xl xl:text-xl 2xl:text-4xl font-semibold">Register for free</h4>
                            <p className=" text-justify text-xs sm:text-xl md:text-xl lg:text-base xl:text-sm 2xl:text-2xl text-gray-700">
                                Sign up online or in our app for free. All you need is an  email address, or a Google or Facebook account.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start space-x-4">
                        <PaperAirplaneIcon className="h-14 w-14 sm:h-12 sm:w-12  transform -rotate-45" />
                        <div>
                            <h4 className="text-lg sm:text-3xl lg:text-2xl xl:text-xl 2xl:text-4xl font-semibold">Send Payment Request</h4>
                            <p className=" text-justify text-xs sm:text-xl md:text-xl lg:text-base xl:text-sm 2xl:text-2xl text-gray-700">
                                Sign up online or in our app for free. All you need is an  email address, or a Google or Facebook account.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start space-x-4 py-6 lg:py-3 pb-8 sm:pb-16 lg:pb-8 xl:pb-24 2xl:pb-20">
                        <CloudArrowUpIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-8 lg:w-8" />
                        <div>
                            <h4 className=" text-lg sm:text-3xl lg:text-2xl xl:text-xl  2xl:text-4xl font-semibold">Submit your work proof</h4>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <Link to={'/register'} className="bg-[#7F56D9] hover:bg-[#6B4DC7] transition rounded-lg text-white inline-flex items-center space-x-2 px-2 sm:px-5 py-3   sm:my-0 shadow-md">
                        <p className="text-xs md:text-base font-medium">Create an account</p>
                        <ArrowRightIcon className="h-3 w-4 sm:h-5 sm:w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Vission;
