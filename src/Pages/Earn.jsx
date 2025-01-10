import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Earn = () => {
  return (
    <AuthenticatedLayout>
      <div className="py-2">
        <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 bg-[#6941C6] rounded-xl">
          <div className=" overflow-hidden shadow-sm sm:rounded-lg rounded-xl bg-[#6941C6]">
            <div className="flex items-center rounded-xl justify-between px-6 py-3">
              <div className=" space-y-4 rounded-xl">
                <p className='text-start text-5xl rounded-xl font-bold text-white'>Share Cashcloudy <br />and earn $20</p>

                <div className="flex items-center justify-start">
                  <p className='text-start text-base text-white'>Share Cashcloudy with 1 friends and earn $20 for yourself. Your <br /> friends get zero fees on a transfer up to $100.</p>
                </div>
                <div className="text-start ">

                  <p className='text-white'>Share your link</p>
                  <div className="flex items-center justify-between  py-3">
                    <div className="flex items-center flex-1 max-w-sm px-3 border dark:border-gray-700 bg-[#9E77ED] rounded-md">
                      <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                      <input
                        type="text" name="search" className="py-2 block w-full dark:bg-transparent  bg-[#9E77ED] dark:border-gray-700 rounded-lg text-sm border-none focus:ring-0 text-white placeholder:text-white placeholder:px-4" placeholder="cashcloudy.com/invite/dic/username" />
                      <button className='border px-2 rounded-md text-white'>Copy</button>
                    </div>


                  </div>

                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img src="/src/assets/tri/tryingle icon.png" alt="" />
              </div>


            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Earn