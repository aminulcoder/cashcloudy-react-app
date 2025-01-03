import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-[#6941C6] ">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 items-center py-3 px-24">
                    {/* Left Section */}
                    <div className="col-span-6">
                        <div className="flex space-x-3 items-center">
                            <img 
                                src="/src/assets/navbar/Clip path group.png" 
                                alt="Logo Part 1" 
                            />
                            <img 
                                src="/src/assets/navbar/Cashcloudy.png" 
                                alt="Logo Part 2" 
                            />
                        </div>
                    </div>
                    
                    {/* Right Section */}
                    <div className="col-span-6 flex justify-end items-center space-x-6">
                        <Link
                            to={'/login'}
                            className="bg-[#6243A8] text-white px-3 py-2 rounded-lg"
                        >
                            Sign in
                        </Link>
                        <Link
                            to={'/register'} 
                            className="bg-white text-[#6243A8] border border-[#6243A8] rounded-lg px-3 py-2"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
