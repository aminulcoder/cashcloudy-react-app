import {
  ArrowDownIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout.jsx";

const Transction = () => {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <div className="py-3">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="flex justify-between py-3 space-x-2 px-5">
  {/* Search bar */}
  <div className="flex items-center w-full max-w-[350px] px-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-indigo-500">
    <MagnifyingGlassIcon
      className="w-5 h-5 text-gray-400"
      aria-hidden="true"
    />
   <input
  type="text"
  name="search"
  className="py-3 px-2 block w-full bg-transparent text-gray-700 text-sm placeholder-gray-400 border-none focus:outline-none focus:ring-0"
  placeholder="Search"
  aria-label="Search"
/>

  </div>

  {/* Filters button */}
  <button
    type="button"
    className="flex items-center border border-gray-300 rounded-lg shadow-sm px-4 bg-white hover:shadow-md transition-shadow space-x-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    aria-label="Open Filters"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 text-gray-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      />
    </svg>
    <p className="text-base font-medium text-gray-700">Filters</p>
  </button>
</div>


          {/* Transaction entries */}
          <div className="py-3">
            <div className="">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="flex justify-between py-3 px-4 sm:px-5">
                  <p className="text-lg sm:text-2xl font-semibold">
                    Transactions
                  </p>
                  <div className="flex items-center font-semibold border rounded-lg py-2 px-3 space-x-2">
                    <p className="text-sm sm:text-base">View all</p>
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </div>

                {/* First Transaction */}
                <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-gray-200">
                      <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="text-start">
                      <p className="font-semibold text-sm  sm:text-base">
                        Phoenix Baker
                      </p>
                      <p className="text-xs text-start sm:text-sm">
                        15 Oct 2024
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-sm sm:text-xl font-semibold">
                      + $3,384 USD
                    </p>
                  </div>
                </div>

                    {/* second  Transaction */}
                    <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-gray-200">
                      <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="text-start">
                      <p className="font-semibold text-sm  sm:text-base">
                        Phoenix Baker
                      </p>
                      <p className="text-xs text-start sm:text-sm">
                        15 Oct 2024
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-sm sm:text-xl font-semibold">
                      + $3,384 USD
                    </p>
                  </div>
                </div>
                {/* Third Transaction */}
                <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-gray-200">
                      <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="text-start">
                      <p className="font-semibold text-sm  sm:text-base">
                        Phoenix Baker
                      </p>
                      <p className="text-xs text-start sm:text-sm">
                        15 Oct 2024
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-sm sm:text-xl font-semibold">
                      + $3,384 USD
                    </p>
                  </div>
                </div>

                {/* Fourth Transaction */}
                <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-gray-200">
                      <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="text-start">
                      <p className="font-semibold text-sm  sm:text-base">
                        Phoenix Baker
                      </p>
                      <p className="text-xs text-start sm:text-sm">
                        15 Oct 2024
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-sm sm:text-xl font-semibold">
                      + $3,384 USD
                    </p>
                  </div>
                </div>

                {/* Fifth Transaction */}
                <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-gray-200">
                      <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="text-start">
                      <p className="font-semibold text-sm  sm:text-base">
                        Phoenix Baker
                      </p>
                      <p className="text-xs text-start sm:text-sm">
                        15 Oct 2024
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-sm sm:text-xl font-semibold">
                      + $3,384 USD
                    </p>
                  </div>
                </div>

                {/* Sixth Transaction */}
                <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-gray-200">
                      <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="text-start">
                      <p className="font-semibold text-sm  sm:text-base">
                        Phoenix Baker
                      </p>
                      <p className="text-xs text-start sm:text-sm">
                        15 Oct 2024
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-sm sm:text-xl font-semibold">
                      + $3,384 USD
                    </p>
                  </div>
                </div>
                {/* Seventh Transaction */}
                <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-gray-200">
                      <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="text-start">
                      <p className="font-semibold text-sm  sm:text-base">
                        Phoenix Baker
                      </p>
                      <p className="text-xs text-start sm:text-sm">
                        15 Oct 2024
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-sm sm:text-xl font-semibold">
                      + $3,384 USD
                    </p>
                  </div>
                </div>
                {/* Eighth Transaction */}
                <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-gray-200">
                      <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="text-start">
                      <p className="font-semibold text-sm  sm:text-base">
                        Phoenix Baker
                      </p>
                      <p className="text-xs text-start sm:text-sm">
                        15 Oct 2024
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-sm sm:text-xl font-semibold">
                      + $3,384 USD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Transction;
