import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Recipient = () => {
  return (
    <div>
      <h2 className='text-center text-gray-950 font-semibold text-3xl '>Enter your new bank details</h2>

      <div className="sm:col-span-3">
        <label htmlFor="country" className="text-start block text-sm/6 font-medium text-gray-900">
          Select Country
        </label>
        <div className="mt-2 grid grid-cols-1">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            placeholder="arteatra"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </div>
      </div>

      <div className="sm:col-span-4 ">
        <label htmlFor="username" className=" text-start block text-sm/6 font-medium text-gray-900">
          Full name of the account holder
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Abdur Rahman"
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-4 ">
        <label htmlFor="username" className=" text-start block text-sm/6 font-medium text-gray-900">
        Bank name
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
            <input
              id="username"
              name="Enter bank name"
              type="text"
              placeholder="Enter bank name"
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-4 ">
        <label htmlFor="username" className=" text-start block text-sm/6 font-medium text-gray-900">
        Branch name
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter Branch name"
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-4 ">
        <label htmlFor="username" className=" text-start block text-sm/6 font-medium text-gray-900">
        Account number
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter account number"
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div className="bg-violet-600 rounded-lg my-3">
        <button className=' bg-violet-600 text-white py-2'>Confirm</button>
      </div>
    </div>
  )
}

export default Recipient