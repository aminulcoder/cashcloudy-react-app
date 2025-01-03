import React from 'react'
import { BuildingLibraryIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Account = () => {
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

      <div className='flex justify-between items-center bg-gray-200 py-2 px-3 rounded-lg'>
        <div className="flex items-center space-x-2">
          <BuildingLibraryIcon className='h-8 w-8' />
          <p className='font-semibold'>Add new bank account</p>
        </div>
        <ChevronRightIcon className="h-6 w-6 " />
      </div>
      <div className="w-full py-3">
        {/* Title */}
        <h2 className="text-purple-600 text-start text-lg font-semibold underline-offset-8">My Accounts</h2>

        {/* Underline */}
        <div className="relative mt-1">
          <div className="h-1 bg-purple-500 w-20"></div>
          <div className="absolute top-0 h-1 w-full bg-gray-200"></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center px-3">
          <div className=" flex items-center justify-center h-16 w-16 border rounded-full p-1">
            <img src="/src/assets/widthdraw/_Nav item button (1).png" alt="" srcset="" />
          </div>
          <div className="text-start px-3">
            <h4 className="text-2xl font-semibold">Bank Name</h4>
            <p>BDT account ending in 8001</p>
          </div>
        </div>
        <ChevronRightIcon className="h-6 w-6 " />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center px-3">
          <div className=" flex items-center justify-center h-16 w-16 border rounded-full p-1">
            <img src="/src/assets/widthdraw/_Nav item button (1).png" alt="" srcset="" />
          </div>
          <div className="text-start px-3">
            <h4 className="text-2xl font-semibold">Bank Name</h4>
            <p>BDT account ending in 8001</p>
          </div>
        </div>
        <ChevronRightIcon className="h-6 w-6 " />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center px-3">
          <div className=" flex items-center justify-center h-16 w-16 border rounded-full p-1">
            <img src="/src/assets/widthdraw/_Nav item button (1).png" alt="" srcset="" />
          </div>
          <div className="text-start px-3">
            <h4 className="text-2xl font-semibold">Bank Name</h4>
            <p>BDT account ending in 8001</p>
          </div>
        </div>
        <ChevronRightIcon className="h-6 w-6 " />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center px-3">
          <div className=" flex items-center justify-center h-16 w-16 border rounded-full p-1">
            <img src="/src/assets/widthdraw/_Nav item button (1).png" alt="" srcset="" />
          </div>
          <div className="text-start px-3">
            <h4 className="text-2xl font-semibold">Bank Name</h4>
            <p>BDT account ending in 8001</p>
          </div>
        </div>
        <ChevronRightIcon className="h-6 w-6 " />
      </div>

    </div>
  )
}

export default Account