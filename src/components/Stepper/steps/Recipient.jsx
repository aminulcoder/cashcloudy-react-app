import React from 'react'
import { MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/20/solid'



const Recipient = () => {
  return (
    <div>

      <h2 className='text-center text-gray-950 font-semibold text-3xl '>Send your money</h2>
      <div className="flex items-center justify-center  py-3">
        <div className="flex items-center  flex-1 max-w-sm px-3 border  rounded-md">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          <input
            type="text" name="search" className="py-2 block w-full px-3 dark:bg-transparent   dark:border-gray-700 rounded-lg text-sm border-none focus:ring-0 text-white" placeholder="Name, @username, email, phone" />
        </div>
      </div>

      <p>Existing recipients</p>
      <div className='space-y-4'>
        <div className="flex justify-between items-center">
          <div className="flex items-center px-3">
            <div className=" flex items-center justify-center h-16 w-16 border rounded-full p-1">
              <img src="/src/assets/stepper/_Nav item button.png" alt="" srcset="" />
            </div>
            <div className="px-3">
              <h4 className="text-3xl font-semibold">Existing recipients</h4>
              <p>BDT account ending in 8001</p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center px-3">
            <div className=" flex items-center justify-center h-16 w-16 border rounded-full p-1">
              <img src="/src/assets/stepper/_Nav item button.png" alt="" srcset="" />
            </div>
            <div className="px-3">
              <h4 className="text-3xl font-semibold">Existing recipients</h4>
              <p>BDT account ending in 8001</p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center px-3">
            <div className=" flex items-center justify-center h-16 w-16 border rounded-full p-1">
              <img src="/src/assets/stepper/_Nav item button.png" alt="" srcset="" />
            </div>
            <div className="px-3">
              <h4 className="text-3xl font-semibold">Existing recipients</h4>
              <p>BDT account ending in 8001</p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center px-3">
            <div className=" flex items-center justify-center h-16 w-16 border rounded-full p-1">
              <img src="/src/assets/stepper/_Nav item button.png" alt="" srcset="" />
            </div>
            <div className="px-3">
              <h4 className="text-3xl font-semibold">Existing recipients</h4>
              <p>BDT account ending in 8001</p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center px-3">
            <div className=" flex items-center justify-center h-16 w-16 border rounded-full p-1">
              <img src="/src/assets/stepper/_Nav item button.png" alt="" srcset="" />
            </div>
            <div className="px-3">
              <h4 className="text-3xl font-semibold">Existing recipients</h4>
              <p>BDT account ending in 8001</p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
      </div>
    </div>
  )
}

export default Recipient