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
import { useState } from "react";
import { Link } from "react-router-dom";
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

      <div className="py-3 ">
        <div className=" mx-auto ">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="flex items-center justify-between px-6 py-3">
              <div className="">
                <p className="text-start">Total balance</p>
                <div className="flex items-center py-3">
                  <strong className="2xl:text-5xl">$3,384.25</strong>
                  <Link to="/admin/add-money" className="">
                    <Button
                      type="button"
                      className={
                        "flex items-center rounded-full mx-3 bg-[#6941C6]"
                      }
                      onClick={() => setIsOpen(true)}
                    >
                      <PlusIcon className="h-8 w-8 p-2 text-white " />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <ChartBarIcon className="h-5 w-5 text-gray-400 font-mono" />
                  <span className="text-lg font-semibold">450,420.00 BDT</span>
                  <p>(1 USD = 119.50 BDT)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Link
                  to="/admin/sendmoney"
                  className="flex items-center border rounded-lg active:bg-[#6941C6] hover:bg-[#6941c6] text-gray-500 hover:text-white px-6 py-2.5 space-x-2"
                >
                  <PaperAirplaneIcon className="h-6 w-6 -rotate-45" />
                  <p className="font-semibold">Send</p>
                </Link>
                <Link
                  to="/admin/widthdraw-money"
                  className="flex items-center border rounded-lg active:bg-[#6941C6] hover:bg-[#6941c6] text-gray-500 hover:text-white px-6 py-2.5 space-x-2"
                >
                 <BuildingLibraryIcon className="h-6 w-6 " />
                  <p className="font-semibold">Withdraw</p>
                </Link>
                <Link
                  to="/admin/request-money"
                  className="flex items-center border rounded-lg active:bg-[#6941C6] hover:bg-[#6941c6] text-gray-500 hover:text-white px-6 py-2.5 space-x-2"
                >
                  <CurrencyDollarIcon className="h-6 w-6  " />
                  <p className="font-semibold">Request</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="flex justify-between px-6 py-4">
            <p className="text-2xl font-semibold">Recent contacts</p>
            <div className="flex items-center space-x-4">
              <ArrowLeftIcon className="h-8 w-8 p-2 hover:bg-gray-200  active:bg-gray-300 rounded " />
              <ArrowRightIcon className="h-8 w-8  p-2 hover:bg-gray-200 active:bg-gray-300 rounded " />
            </div>
          </div>
          <div className="flex items-center justify-between  py-3">
            <div className=" space-y-2 px-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                  <img
                    src="/src/assets/users/Avatar.png"
                    className="h-5 w-5"
                    alt=""
                  />
                  <p>Phoenix Baker</p>
                </div>
                <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                  <img
                    src="/src/assets/users/Avatar.png"
                    className="h-5 w-5"
                    alt=""
                  />
                  <p>Phoenix Baker</p>
                </div>
                <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                  <img
                    src="/src/assets/users/Avatar.png"
                    className="h-5 w-5"
                    alt=""
                  />
                  <p>Phoenix Baker</p>
                </div>
                <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                  <img
                    src="/src/assets/users/Avatar.png"
                    className="h-5 w-5"
                    alt=""
                  />
                  <p>Phoenix Baker</p>
                </div>

             
                
                <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                  <img
                    src="/src/assets/users/Avatar.png"
                    className="h-5 w-5"
                    alt=""
                  />
                  <p>Phoenix Baker</p>
                </div>
                <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                  <img
                    src="/src/assets/users/Avatar.png"
                    className="h-5 w-5"
                    alt=""
                  />
                  <p>Phoenix Baker</p>
                </div>
                <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                  <img
                    src="/src/assets/users/Avatar.png"
                    className="h-5 w-5"
                    alt=""
                  />
                  <p>Phoenix Baker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <div className="">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className=" flex justify-between py-3 px-5">
              <p className="text-2xl font-semibold">Transactions</p>
              <div className="flex items-center font-semibold border rounded-lg py-2 px-3 space-x-2">
                <p> View all</p>
                <ArrowRightIcon className="h-4 w-4" />
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
                  <span className="">15 Oct 2024</span>
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
                  <span className="">15 Oct 2024</span>
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
                  <span className="">15 Oct 2024</span>
                </div>
              </div>
              <div className="">
                <p className="text-xl font-semibold"> + $3,384 USD</p>
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
                <p className="text-xl font-semibold"> + $3,384 USD</p>
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
                <p className="text-xl font-semibold"> + $3,384 USD</p>
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
                <p className="text-xl font-semibold"> + $3,384 USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
