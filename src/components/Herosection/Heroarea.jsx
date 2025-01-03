import React from 'react';

const Heroarea = () => {
    return (

        <section className='bg-red-500' >

            <div className="bg-[#6941C6] h-[100vh]  px-64">
                {/* Hero Heading */}
                <h1 className="text-7xl text-white  font-bold px-28 ">
                    Easy way to send <br /> & receive online <br /> payments
                </h1>

                {/* Get Started Button */}
                <button
                    type="button"
                    className="border rounded-lg bg-white py-2 px-6 mt-12  text-[#6941C6] font-semibold"
                >
                    Get Started
                </button>



                {/* Flag Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    {/* USA Section */}
                    <div
                        className="relative h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
                        style={{
                            backgroundImage: "url('/src/assets/Heroarea/usa-flag.png')",
                        }}
                    >
                        <img
                            src="/src/assets/Heroarea/medium-shot-man-posing-studio 1.png"
                            alt="Man posing"
                            className="absolute bottom-0 left-0 z-50 h-[400px] w-1/2"
                        />
                    </div>

                    {/* Bangladesh Section */}
                    <div
                        className="relative h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
                        style={{
                            backgroundImage: "url('/src/assets/Heroarea/bangladesh-flag.png')",
                        }}
                    >
                        <img
                            src="/src/assets/Heroarea/man-wearing-t-shirt-gesturing 1.png"
                            alt="Man posing"
                            className="absolute bottom-0 z-50 h-[400px] left-0 w-1/2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heroarea;
