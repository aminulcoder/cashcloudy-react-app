import { ArrowRightIcon, PlayIcon } from '@heroicons/react/16/solid'
import { ArrowUpIcon, ArrowUpLeftIcon, CloudArrowUpIcon, CloudIcon } from '@heroicons/react/24/outline'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Vission = () => {
    return (

        <div className='py-12'>
            <div className="grid grid-cols-12 gap-12">

                <div className="col-span-6">
                    <div className="">
                        <img src="/src/assets/Vission/Video (1).png" alt="" />
                    </div>
                </div>
                <div className="col-span-6 space-y-6 text-start">
                    <h2 className='text-6xl font-bold '>How to receive money ?</h2>
                    <div className="flex space-x-3">
                        <ArrowRightCircleIcon className='h-8 w-8'></ArrowRightCircleIcon>
                        <div className="">
                            <h4 className='text-6 font-semibold'>Register for free</h4>
                            <p>Sign up online or in our app for free. All you need is an email address, or a Google or Facebook account.</p>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <PaperAirplaneIcon className='h-8 w-8 -rotate-45'></PaperAirplaneIcon>
                        <div className="">
                            <h4 className='text-6 font-semibold'>Send Payment request</h4>
                            <p>Sign up online or in our app for free. All you need is an email address, or a Google or Facebook account.</p>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <CloudArrowUpIcon className="h-12 w-12 text-gray-500" />
                        <div className="">
                            <h4 className='text-6 font-semibold'>Submit your work proof</h4>
                            <p>Sign up online or in our app for free. All you need is an email address, or a Google or Facebook account.</p>
                        </div>
                    </div>
                    <div className="bg-[#8C4DC3] text-white inline-flex border border-md px-3 py-2">
                        <p>Create a account</p>
                        <ArrowRightIcon className='h-5 w-5'></ArrowRightIcon>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Vission