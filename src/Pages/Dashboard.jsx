

import { ArrowDownIcon, ChartBarIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { ArrowRightIcon, FunnelIcon, MagnifyingGlassIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import SearchFilter from '../components/SearchFilter';
import Stepper from '../components/Stepper/Stepper';
export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            {/* <Head title="Dashboard" /> */}

            <div className="py-3">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex items-center justify-between px-6 py-3">
                            <div className="">
                                <p className='text-start'>Total balance</p>
                                <div className="flex items-center py-3">
                                    <strong className='text-2xl'>$3,384.25</strong>
                                    <PlusCircleIcon className='h-6 w-6' />
                                </div>
                                <div className="flex items-center">
                                    <ChartBarIcon className='h-4 w-4' />
                                    <span>450,420.00 BDT</span>
                                    <p>(1 USD = 119.50 BDT)</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center border rounded-lg px-2 py-1">
                                    <PaperAirplaneIcon className='h-4 w-6 -rotate-45' />
                                    <p>Send</p>
                                </div>
                                <div className="flex items-center border rounded-lg px-2 py-1">
                                    {/* <  className='h-4 w-6 -rotate-45' /> */}
                                    <p>Withdraw</p>
                                </div>
                                <div className="flex items-center border rounded-lg px-2 py-1">
                                    <CurrencyDollarIcon className='h-4 w-4 ' />
                                    <p>Request</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="sm:px-6 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex items-center justify-between  py-3">
                            <div className=" space-y-3 px-6">
                                <div className="flex justify-between">

                                    <p className=''>Recent contacts</p>
                                    <div className="">
                                        <ArrowLeftIcon className='h-4 w-4' />
                                        <ArrowRightIcon className='h-4 w-4' />
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" srcset="" />
                                        <p>Phoenix Baker</p>
                                    </div>

                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" srcset="" />
                                        <p>Phoenix Baker</p>
                                    </div>
                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" srcset="" />
                                        <p>Phoenix Baker</p>
                                    </div>
                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" srcset="" />
                                        <p>Phoenix Baker</p>
                                    </div>
                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" srcset="" />
                                        <p>Phoenix Baker</p>
                                    </div>
                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" srcset="" />
                                        <p>Phoenix Baker</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3">
                <div className="sm:px-6 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className=" flex justify-between py-3 px-5">
                            <p className='font-semibold'>Transactions</p>
                            <div className="flex items-center border rounded-lg py-1 px-2">
                                <p>     view all</p>
                                <ArrowRightIcon className='h-5 w-5' />
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3">
                <div className="sm:px-6 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className=" flex justify-between py-3 px-5">

                            <div className="flex items-center justify-between px-5 py-3">
                                <div className="flex items-center flex-1 max-w-sm px-3 border dark:border-gray-700 rounded-md">
                                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                                    <input
                                        onChange={(e) => {
                                            return router.get(route(routeName, params),
                                                {
                                                    search: e.target.value
                                                },
                                                {
                                                    preserveState: true,
                                                    replace: true
                                                }
                                            )
                                        }}
                                        type="text" name="search" className="py-2 block w-full dark:bg-transparent border-gray-200 dark:border-gray-700 rounded-lg text-sm border-none focus:ring-0" placeholder="Search" />
                                </div>


                            </div>

                            <div className="flex items-center border rounded-lg py-1 px-2">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                </svg>

                                <p>    Filters</p>
                                {/* <Fil className='h-5 w-5' /> */}
                                {/* <FilterListIc  className='h-5 w-5' /> */}
                                {/* <Filter */}
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-4 border-b py-3">
                            <div className="flex items-center space-x-3 px-6">
                                <div className=" p-2 inline-block rounded-full bg-gray-200">
                                    <ArrowDownIcon className='h-4 w-4 ' />
                                </div>
                                <div className="">
                                    <p>Phoenix Baker</p>
                                    <span>15 Oct 2024</span>
                                </div>
                            </div>
                            <div className="">
                                <p> + $3,384 USD</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
      <Stepper />
    </div>
                    </div>
                </div>
            </div>

            <div className="py-3">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-[#6941C6] rounded-xl">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg rounded-xl bg-[#6941C6]">
                        <div className="flex items-center rounded-xl justify-between px-6 py-3">
                            <div className=" space-y-4 rounded-xl">
                                <p className='text-start text-4xl rounded-xl font-bold text-white'>Share Cashcloudy <br />and earn $20</p>

                                <div className="flex items-center justify-start">
                                    <p className='text-start text-white'>Share Cashcloudy with 1 friends and earn $20 for yourself. Your <br /> friends get zero fees on a transfer up to $100.</p>
                                </div>
                                <div className="text-start ">

                                    <p className='text-white'>Share your link</p>
                                    <div className="flex items-center justify-between  py-3">
                                        <div className="flex items-center flex-1 max-w-sm px-3 border dark:border-gray-700 bg-[#9E77ED] rounded-md">
                                            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                                            <input
                                                onChange={(e) => {
                                                    return router.get(route(routeName, params),
                                                        {
                                                            search: e.target.value
                                                        },
                                                        {
                                                            preserveState: true,
                                                            replace: true
                                                        }
                                                    )
                                                }}
                                                type="text" name="search" className="py-2 block w-full dark:bg-transparent  bg-[#9E77ED] dark:border-gray-700 rounded-lg text-sm border-none focus:ring-0 text-white" placeholder="Search" />
                                                <button className='border px-2 rounded-md text-white'>Copy</button>
                                        </div>


                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img src="/src/assets/tri/tryingle icon.png" alt="" srcset="" />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}