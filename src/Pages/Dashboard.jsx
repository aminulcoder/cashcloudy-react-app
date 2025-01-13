import { ArrowDownIcon, ChartBarIcon } from "@heroicons/react/20/solid";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
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
export default function Dashboard() {
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
              <div className="flex-1">
                <p className="text-start text-xs sm:text-sm md:text-base text-gray-600">
                  Total balance
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center items-start space-y-2 sm:space-y-0 sm:space-x-4 py-2">
                  <strong className="text-2xl sm:text-3xl md:text-4xl">
                    $3,384.25
                  </strong>
                  <Link to="/admin/add-money">
                    <Button
                      type="button"
                      className="flex items-center rounded-full bg-[#6941C6] p-1 sm:p-2 justify-center font-bold"
                    >
                      <PlusIcon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </Button>
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
