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
      {" "}
      <div className="py-3">
        <div className=" ">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className=" flex justify-between py-3 px-5">
              <div className="flex items-center justify-between px-5 py-3 bg-white dark:bg-gray-900">
                <div className="flex items-center flex-1 max-w-sm px-3 border border-gray-300 dark:border-gray-700 rounded-md focus-within:ring-2 focus-within:ring-indigo-500">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    name="search"
                    className="py-3 px-2 block w-[350px] bg-transparent text-gray-700 dark:text-gray-300 text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-0"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="flex items-center border border-gray-300 rounded-lg shadow-sm px-4  bg-white hover:shadow-md transition-shadow space-x-3">
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
              </div>
            </div>
            <div className=" flex justify-between px-4 border-b py-3 pr-8 ">
              <div className="flex items-center space-x-3 px-6">
                <div className=" p-2 inline-block rounded-full bg-gray-200">
                  <ArrowDownIcon className="h-6 w-6 " />
                </div>
                <div className="">
                  <p className="font-semibold">Phoenix Baker</p>
                  <span>15 Oct 2024</span>
                </div>
              </div>
              <div className="">
                <p className=" text-xl font-semibold"> + $3,384 USD</p>
              </div>
            </div>
            <div className=" flex justify-between px-4 border-b py-3 pr-8 ">
              <div className="flex items-center space-x-3 px-6">
                <div className=" p-2 inline-block rounded-full bg-gray-200">
                  <ArrowDownIcon className="h-6 w-6 " />
                </div>
                <div className="">
                  <p className="font-semibold">Phoenix Baker</p>
                  <span>15 Oct 2024</span>
                </div>
              </div>
              <div className="">
                <p className=" text-xl font-semibold"> + $3,384 USD</p>
              </div>
            </div>
            <div className=" flex justify-between px-4 border-b py-3 pr-8 ">
              <div className="flex items-center space-x-3 px-6">
                <div className=" p-2 inline-block rounded-full bg-gray-200">
                  <ArrowDownIcon className="h-6 w-6 " />
                </div>
                <div className="">
                  <p className="font-semibold">Phoenix Baker</p>
                  <span>15 Oct 2024</span>
                </div>
              </div>
              <div className="">
                <p className=" text-xl font-semibold"> + $3,384 USD</p>
              </div>
            </div>
            <div className=" flex justify-between px-4 border-b py-3 pr-8 ">
              <div className="flex items-center space-x-3 px-6">
                <div className=" p-2 inline-block rounded-full bg-gray-200">
                  <ArrowDownIcon className="h-6 w-6 " />
                </div>
                <div className="">
                  <p className="font-semibold">Phoenix Baker</p>
                  <span>15 Oct 2024</span>
                </div>
              </div>
              <div className="">
                <p className=" text-xl font-semibold"> + $3,384 USD</p>
              </div>
            </div>
            <div className=" flex justify-between px-4 border-b py-3 pr-8 ">
              <div className="flex items-center space-x-3 px-6">
                <div className=" p-2 inline-block rounded-full bg-gray-200">
                  <ArrowDownIcon className="h-6 w-6 " />
                </div>
                <div className="">
                  <p className="font-semibold">Phoenix Baker</p>
                  <span>15 Oct 2024</span>
                </div>
              </div>
              <div className="">
                <p className=" text-xl font-semibold"> + $3,384 USD</p>
              </div>
            </div>
            <div className=" flex justify-between px-4 border-b py-3 pr-8 ">
              <div className="flex items-center space-x-3 px-6">
                <div className=" p-2 inline-block rounded-full bg-gray-200">
                  <ArrowDownIcon className="h-6 w-6 " />
                </div>
                <div className="">
                  <p className="font-semibold">Phoenix Baker</p>
                  <span>15 Oct 2024</span>
                </div>
              </div>
              <div className="">
                <p className=" text-xl font-semibold"> + $3,384 USD</p>
              </div>
            </div>
            <div className=" flex justify-between px-4 border-b py-3 pr-8 ">
              <div className="flex items-center space-x-3 px-6">
                <div className=" p-2 inline-block rounded-full bg-gray-200">
                  <ArrowDownIcon className="h-6 w-6 " />
                </div>
                <div className="">
                  <p className="font-semibold">Phoenix Baker</p>
                  <span>15 Oct 2024</span>
                </div>
              </div>
              <div className="">
                <p className=" text-xl font-semibold"> + $3,384 USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Transction;
