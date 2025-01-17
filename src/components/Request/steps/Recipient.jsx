import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Recipient = () => {
  return (
    <div>
      <h2 className="text-center text-gray-950 font-semibold text-2xl xl:text-2xl ">
        Send your money
      </h2>
      <div className="flex items-center justify-center  py-3">
        <div className="flex items-center  flex-1 max-w-6xl px-3 border  rounded-md">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="search"
            className="py-3 px-2 block w-full bg-transparent text-gray-700 text-sm placeholder-gray-400 border-none focus:outline-none focus:ring-0"
            placeholder=" Name ,@username ,phone "
            aria-label="Search"
          />
        </div>
      </div>

      <p className="text-start text-gray-500 text-base sm:text-xl py-6 px-6">
        Existing recipients
      </p>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center sm:px-3">
            <div className=" flex items-center justify-center  h-12 sm:h-16 w-12 sm:w-16 border rounded-full p-1">
              <img
                src="/src/assets/stepper/_Nav item button.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="px-3">
              <h4 className=" text-xl sm:text-3xl text-gray-800 font-semibold">
                Existing recipients
              </h4>
              <p className="text-gray-500 text-start text-xs">
                BDT account ending in 8001
              </p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center sm:px-3">
            <div className=" flex items-center justify-center  h-12 sm:h-16 w-12 sm:w-16 border rounded-full p-1">
              <img
                src="/src/assets/stepper/_Nav item button.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="px-3">
              <h4 className=" text-xl sm:text-3xl text-gray-800 font-semibold">
                Existing recipients
              </h4>
              <p className="text-gray-500 text-start text-xs">
                BDT account ending in 8001
              </p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center sm:px-3">
            <div className=" flex items-center justify-center  h-12 sm:h-16 w-12 sm:w-16 border rounded-full p-1">
              <img
                src="/src/assets/stepper/_Nav item button.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="px-3">
              <h4 className=" text-xl sm:text-3xl text-gray-800 font-semibold">
                Existing recipients
              </h4>
              <p className="text-gray-500 text-start text-xs">
                BDT account ending in 8001
              </p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center sm:px-3">
            <div className=" flex items-center justify-center  h-12 sm:h-16 w-12 sm:w-16 border rounded-full p-1">
              <img
                src="/src/assets/stepper/_Nav item button.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="px-3">
              <h4 className=" text-xl sm:text-3xl text-gray-800 font-semibold">
                Existing recipients
              </h4>
              <p className="text-gray-500 text-start text-xs">
                BDT account ending in 8001
              </p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center sm:px-3">
            <div className=" flex items-center justify-center  h-12 sm:h-16 w-12 sm:w-16 border rounded-full p-1">
              <img
                src="/src/assets/stepper/_Nav item button.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="px-3">
              <h4 className=" text-xl sm:text-3xl text-gray-800 font-semibold">
                Existing recipients
              </h4>
              <p className="text-gray-500 text-start text-xs">
                BDT account ending in 8001
              </p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center sm:px-3">
            <div className=" flex items-center justify-center  h-12 sm:h-16 w-12 sm:w-16 border rounded-full p-1">
              <img
                src="/src/assets/stepper/_Nav item button.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="px-3">
              <h4 className=" text-xl sm:text-3xl text-gray-800 font-semibold">
                Existing recipients
              </h4>
              <p className="text-gray-500 text-start text-xs">
                BDT account ending in 8001
              </p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center sm:px-3">
            <div className=" flex items-center justify-center  h-12 sm:h-16 w-12 sm:w-16 border rounded-full p-1">
              <img
                src="/src/assets/stepper/_Nav item button.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="px-3">
              <h4 className=" text-xl sm:text-3xl text-gray-800 font-semibold">
                Existing recipients
              </h4>
              <p className="text-gray-500 text-start text-xs">
                BDT account ending in 8001
              </p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 " />
        </div>
      </div>
    </div>
  );
};

export default Recipient;
