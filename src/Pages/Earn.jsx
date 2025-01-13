import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Earn = () => {
  return (
    <AuthenticatedLayout>
      <div className=" ">
        <div className="max-w-7xl mx-auto bg-[#6941C6] rounded-xl">
          <div className="overflow-hidden shadow-sm sm:rounded-lg bg-[#6941C6] rounded-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-6">
              <div className="space-y-4 lg:max-w-xl">
                <p className='text-start text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
                  Share Cashcloudy <br />and earn $20
                </p>

                <div className="flex items-center justify-start">
                  <p className='text-start text-sm sm:text-base text-white'>
                    Share Cashcloudy with 1 friend and earn $20 for yourself. Your
                    <br /> friends get zero fees on a transfer up to $100.
                  </p>
                </div>
                <div className="text-start">
                  <p className='text-white text-sm sm:text-base'>Share your link</p>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center flex-1 max-w-sm sm:max-w-md px-3 border dark:border-gray-700 bg-[#9E77ED] rounded-md">
                      <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                      <input
                        type="text"
                        name="search"
                        className="py-2 block w-full dark:bg-transparent bg-[#9E77ED] dark:border-gray-700 rounded-lg text-sm sm:text-base text-white placeholder:text-white placeholder:px-4"
                        placeholder="cashcloudy.com/invite/dic/username"
                      />
                      <button className='border px-3 sm:px-4 rounded-md text-white'>
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="/src/assets/tri/tryingle icon.png"
                  alt="Icon"
                  className="w-32 sm:w-40 lg:w-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Earn
