

import { ArrowDownIcon, ChartBarIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';

import { StepperContext } from '../contexts/StepperContext.jsx';
import { ArrowRightIcon, FunnelIcon, MagnifyingGlassIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import SearchFilter from '../components/SearchFilter';
import Stepper from '../components/Stepper/Stepper';
import StapperControl from '../components/Stepper/StapperControl.jsx';
import Recipient from '../components/Stepper/steps/Recipient.jsx';
import Amount from '../components/Stepper/steps/Amount.jsx';
import Review from '../components/Stepper/steps/Review.jsx';
import Pay from '../components/Stepper/steps/Pay.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';
export default function Dashboard() {

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            {/* <Head title="Dashboard" /> */}

            <div className="py-3">
                <div className=" mx-auto sm:px-6 lg:px-6">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex items-center justify-between px-6 py-3">
                            <div className="">
                                <p className='text-start'>Total balance</p>
                                <div className="flex items-center py-3">
                                    <strong className='text-2xl'>$3,384.25</strong>
                                    <Link to="/admin/add-money">
                                        <Button type="button" onClick={() => setIsOpen(true)}>
                                            <PlusCircleIcon className='h-6 w-6' />

                                        </Button>
                                    </Link>
                                </div>
                                <div className="flex items-center">
                                    <ChartBarIcon className='h-4 w-4' />
                                    <span>450,420.00 BDT</span>
                                    <p>(1 USD = 119.50 BDT)</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Link to="/admin/sendmoney" className="flex items-center border rounded-lg px-2 py-1">
                                    <PaperAirplaneIcon className='h-4 w-6 -rotate-45' />
                                    <p>Send</p>
                                </Link>
                                <Link to="/admin/widthdraw-money" className="flex items-center border rounded-lg px-2 py-1">
                                    {/* <  className='h-4 w-6 -rotate-45' /> */}
                                    <p>Withdraw</p>
                                </Link>
                                <Link to="/admin/request-money" className="flex items-center border rounded-lg px-2 py-1">
                                    <CurrencyDollarIcon className='h-4 w-4 ' />
                                    <p>Request</p>
                                </Link>

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
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" />
                                        <p>Phoenix Baker</p>
                                    </div>

                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" />
                                        <p>Phoenix Baker</p>
                                    </div>
                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" />
                                        <p>Phoenix Baker</p>
                                    </div>
                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" />
                                        <p>Phoenix Baker</p>
                                    </div>
                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" />
                                        <p>Phoenix Baker</p>
                                    </div>
                                    <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                                        <img src="/src/assets/users/Avatar.png" className='h-5 w-5' alt="" />
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

        </AuthenticatedLayout>
    );
}