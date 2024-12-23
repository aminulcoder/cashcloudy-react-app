
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Mission = () => {
  return (
    <div className='py-12'>
      <div className="grid grid-cols-12">
        <div className="col-span-6 space-y-6 text-start">
          <h2 className='text-6xl font-bold '>Why choose Cashcloudy?</h2>
          <p>In Bangladesh majority freelancers cannot receive money through proper channels from USA, they have to rely on an unknown sources.Therefore, they don’t get their money on time even after paying fair compensation. Sometimes they lose all their money. That is why we are creating Cashcloudy to solve all the problems. </p>
          <div className="bg-[#8C4DC3] text-white inline-flex border border-md px-3 py-2">
            <p>Create a account</p>
            <ArrowRightIcon className='h-6 w-6'></ArrowRightIcon>
          </div>
        </div>
        <div className="col-span-6">
          <div className="">
            <img src="/src/assets/Feature/Video.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission