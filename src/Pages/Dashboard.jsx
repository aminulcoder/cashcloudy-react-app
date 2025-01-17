import { ArrowDownIcon, ChartBarIcon } from "@heroicons/react/20/solid";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import { useState } from "react";
import {
  ArrowRightIcon,
  BuildingLibraryIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

import "../App.css";
import Tooltip from "../components/Tooltip/Tooltip";
export default function Dashboard() {
  const [showModal, setshowModal] = useState(false);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      {/* <Head title="Dashboard" /> */}

      <div className="pb-3 sm:py-3">
        <div className="container mx-auto ">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 sm:px-6 py-3 space-y-3 md:space-y-0">
              {/* Total Balance */}
              <div className="flex-1 py-1">
                <p className="text-start text-xs sm:text-sm md:text-base text-gray-600">
                  Total balance
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center items-start space-y-2 sm:space-y-0 sm:space-x-4 py-3">
                  <strong className="text-2xl sm:text-3xl md:text-4xl">
                    $3,384.25
                  </strong>

                  <Link to="/admin/add-money" className="container my-6">
                    <Tooltip infoText="Add Money" className="z-50">
                      <Button
                        type="button"
                        className="flex items-center rounded-full btn bg-[#6941C6] p-1 sm:p-2 justify-center font-bold"
                      >
                        <PlusIcon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                      </Button>
                    </Tooltip>
                  </Link>
                </div>

                <div className="flex items-center space-x-2">
                  <ChartBarIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-xs sm:text-sm font-semibold">
                    450,420.00 BDT
                  </span>
                  <p className="text-xs text-gray-500">(1 USD = 119.50 BDT)</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-start gap-2">
                <NavLink
                  to="/admin/sendmoney"
                  className={({ isActive }) =>
                    `flex items-center border rounded-lg px-2 sm:px-3 py-1.5 space-x-1.5 ${
                      isActive
                        ? "bg-[#6941C6] text-white"
                        : "text-gray-500 hover:bg-[#6941c6] hover:text-white"
                    }`
                  }
                >
                  <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                  <p className="font-semibold text-xs sm:text-sm">Send</p>
                </NavLink>

                <NavLink
                  to="/admin/widthdraw-money"
                  className={({ isActive }) =>
                    `flex items-center border rounded-lg px-2 sm:px-3 py-1.5 space-x-1.5 ${
                      isActive
                        ? "bg-[#6941C6] text-white"
                        : "text-gray-500 hover:bg-[#6941c6] hover:text-white"
                    }`
                  }
                >
                  <BuildingLibraryIcon className="h-4 w-4" />
                  <p className="font-semibold text-xs sm:text-sm">Withdraw</p>
                </NavLink>

                <NavLink
                  to="/admin/request-money"
                  className={({ isActive }) =>
                    `flex items-center border rounded-lg px-2 sm:px-3 py-1.5 space-x-1.5 ${
                      isActive
                        ? "bg-[#6941C6] text-white"
                        : "text-gray-500 hover:bg-[#6941c6] hover:text-white"
                    }`
                  }
                >
                  <CurrencyDollarIcon className="h-4 w-4" />
                  <p className="font-semibold text-xs sm:text-sm">Request</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg my-3">
        <div className="flex justify-between px-2 sm:px-6 py-3 sm:py-4 bg-[#6941C6]">
          {/* Left Section */}
          <div className="flex space-x-2 sm:space-x-3">
            <img
              src="/src/assets/paper dashboard/arrow box.svg"
              className="h-8 w-8 sm:h-12 sm:w-12 bg-[#7F56D9] rounded-full p-2 sm:p-3"
              alt="Avatar"
            />
            <div className="flex flex-col justify-center">
              <h4 className="font-Inter text-sm sm:text-xl font-medium text-white leading-tight">
                Phoenix Baker requested 100 USD
              </h4>
              <p className="text-start text-xs sm:text-sm text-white font-Inter">
                Pay or decline their request
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <button
              onClick={() => setshowModal(true)}
              className="text-white text-xs sm:text-base font-Inter font-semibold bg-[#7F56D9] px-1 sm:px-4 py-2 rounded-lg"
            >
              View Request
            </button>
          </div>
        </div>

        {showModal && (
          <div className="bg-gray-500/75 fixed inset-0  flex justify-center items-center z-50">
            <div className="bg-white py-4 px-[22px] sm:p-6  sm:max-w-md rounded-lg shadow-lg relative">
              <div className="flex flex-col gap-3 sm:gap-4 w-[300px]">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Request Details
                </h2>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-start block text-sm font-medium text-gray-600"
                    >
                      From
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstName"
                      placeholder="Phoenix Baker"
                      onChange={(e) => setFirstname(e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="text-start block text-sm font-medium text-gray-600"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastName"
                      placeholder="100 USD"
                      onChange={(e) => setLastname(e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="text-start block text-sm font-medium text-gray-900 mb-1 sm:mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows={4}
                    placeholder="Here will be a short description."
                    className="block w-full rounded-md bg-white sm:px-3 py-2 text-sm text-gray-900 border border-gray-300 focus:outline-none placeholder:px-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="flex justify-between space-x-4">
                  <button
                    onClick={() => setshowModal(false)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
                  >
                    Decline
                  </button>
                  <button
                    onClick={() => setshowModal(false)}
                    className="bg-[#6941C6] font-semibold text-white px-4 py-2 rounded hover:bg-gray-400 text-sm sm:text-base"
                  >
                    Pay now
                  </button>
                </div>
              </div>
              <div className="absolute top-2 right-2 cursor-pointer">
                <IoClose onClick={() => setshowModal(false)} size={24} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="flex justify-between px-4 sm:px-6 py-4">
          <p className="text-lg sm:text-2xl font-semibold">Recent Contacts</p>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <ArrowLeftIcon className="h-6 w-6 sm:h-8 sm:w-8 p-1 sm:p-2 hover:bg-gray-200 active:bg-gray-300 rounded" />
            <ArrowRightIcon className="h-6 w-6 sm:h-8 sm:w-8 p-1 sm:p-2 hover:bg-gray-200 active:bg-gray-300 rounded" />
          </div>
        </div>
        <div className="flex items-center justify-between py-3">
          <div className="space-y-2 px-4 sm:px-6 overflow-x-auto">
            <div className="flex items-center flex-wrap gap-2">
              {/* First Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                <img
                  src="/src/assets/users/Avatar.png"
                  className="h-5 w-5"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm">Phoenix Baker</p>
              </div>
              {/* Second Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                <img
                  src="/src/assets/users/Avatar.png"
                  className="h-5 w-5"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm">Phoenix Baker</p>
              </div>
              {/* Third Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                <img
                  src="/src/assets/users/Avatar.png"
                  className="h-5 w-5"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm">Phoenix Baker</p>
              </div>
              {/* Fourth Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                <img
                  src="/src/assets/users/Avatar.png"
                  className="h-5 w-5"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm">Phoenix Baker</p>
              </div>
              {/* Fifth Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                <img
                  src="/src/assets/users/Avatar.png"
                  className="h-5 w-5"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm">Phoenix Baker</p>
              </div>
              {/* Sixth Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                <img
                  src="/src/assets/users/Avatar.png"
                  className="h-5 w-5"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm">Phoenix Baker</p>
              </div>
              {/* Seventh Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                <img
                  src="/src/assets/users/Avatar.png"
                  className="h-5 w-5"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm">Phoenix Baker</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 bg-white">
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
              <p className="text-xs text-start sm:text-sm">15 Oct 2024</p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-semibold">+ $3,384 USD</p>
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
              <p className="text-xs text-start sm:text-sm">15 Oct 2024</p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-semibold">+ $3,384 USD</p>
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
              <p className="text-xs text-start sm:text-sm">15 Oct 2024</p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-semibold">+ $3,384 USD</p>
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
              <p className="text-xs text-start sm:text-sm">15 Oct 2024</p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-semibold">+ $3,384 USD</p>
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
              <p className="text-xs text-start sm:text-sm">15 Oct 2024</p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-semibold">+ $3,384 USD</p>
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
              <p className="text-xs text-start sm:text-sm">15 Oct 2024</p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-semibold">+ $3,384 USD</p>
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
              <p className="text-xs text-start sm:text-sm">15 Oct 2024</p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-semibold">+ $3,384 USD</p>
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
              <p className="text-xs text-start sm:text-sm">15 Oct 2024</p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-semibold">+ $3,384 USD</p>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
