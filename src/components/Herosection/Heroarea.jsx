import React from 'react';

const Heroarea = () => {
    return (
        <div className='bg-[#6941C6]'>
            <h1 className='text-7xl text-white px-72 font-bold'>
                Easy way to send & receive online payments
            </h1>
            <button type="button" className='border rounded-lg bg-white py-2 px-3 my-16'>
                Get Started
            </button>

            <div className="grid grid-cols-12 gap-24">
               
                <div className="col-span-6">
                    <div
                        className="bg-cover bg-center relative h-64 w-full"
                        style={{ backgroundImage: "url('/src/assets/Heroarea/usa-flag.png')" }} // Background image
                    >
                        {/* You can remove this img tag if it's not needed */}
                        <img
                            src="/src/assets/Heroarea/medium-shot-man-posing-studio 1.png"
                            alt="Man posing"
                            className="absolute bottom-0 left-0 w-1/2" // Optional class for positioning image
                        />
                    </div>
                </div>

               
                <div className="col-span-6">
                    <div
                        className="bg-cover bg-center relative h-64 w-full"
                        style={{ backgroundImage: "url('/src/assets/Heroarea/bangladesh-flag.png')" }}
                    >

                        <img
                            src="/src/assets/Heroarea/man-wearing-t-shirt-gesturing 1.png"
                            alt="Man posing"
                            className="absolute bottom-0 left-0 w-1/2"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Heroarea;
