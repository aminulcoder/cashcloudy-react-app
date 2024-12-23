import { ArrowRightIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Feature = () => {
  return (
    <div className='py-12'>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 ">
          <div className="border  rounded-xl px-6 space-y-4 py-6">
            <img src="/src/assets/Feature/Icon1.png" className='border rounded-lg p-4 bg-gray-100' alt="" srcset="" />
            <h3 className='text-start text-3xl font-bold'>Easily receive money from clients</h3>
            <p className='text-start text-xl'>A comprehensive dashboard showing balance, recent transactions, and financial insights at a glance.</p>
          </div>
        </div>
        <div className="col-span-4 ">
          <div className="border  rounded-xl px-6 space-y-4 py-6">
            <img src="/src/assets/Feature/monitor-02.png" className='border rounded-lg p-4 bg-gray-100' alt="" srcset="" />
            <h3 className='text-start text-3xl font-bold'>Account overview dashboard</h3>
            <p className='text-start text-xl'>A comprehensive dashboard showing balance, recent transactions, and financial insights at a glance.</p>
          </div>
        </div>
        <div className="col-span-4 ">
          <div className="border  rounded-xl px-6 space-y-4 py-6">
            <img src="/src/assets/Feature/bell-03.png" className='border rounded-lg p-4 bg-gray-100' alt="" srcset="" />
            <h3 className='text-start text-3xl font-bold'>Real-Time Notifications</h3>
            <p className='text-start text-xl'>Alerts for transactions, low balances, or unusual account activity.</p>
          </div>
        </div>
        <div className="col-span-4 ">
          <div className="border  rounded-xl px-6 space-y-4 py-6">
            <img src="/src/assets/Feature/credit-card-up-04.png" className='border rounded-lg p-4 bg-gray-100' alt="" srcset="" />
            <h3 className='text-start text-3xl font-bold'>Anytime withdraw in local bank</h3>
            <p className='text-start text-xl'>Users can withdraw money to local banks in real time.</p>
          </div>
        </div>
        <div className="col-span-4 ">
          <div className="border  rounded-xl px-6 space-y-4 py-6">
            <img src="/src/assets/Feature/Icon-05.png" className='border rounded-lg p-4 bg-gray-100' alt="" srcset="" />
            <h3 className='text-start text-3xl font-bold'>Best rate from other payment getaways</h3>
            <p className='text-start text-xl'>We provide the best rate to our customers because we understand how hard to earn remittance.</p>
          </div>
        </div>
        <div className="col-span-4 ">
          <div className="border  rounded-xl px-6 space-y-4 py-6">
            <img src="/src/assets/Feature/headphones-06.png" className='border rounded-lg p-4 bg-gray-100' alt="" srcset="" />
            <h3 className='text-start text-3xl font-bold'>24/7 Customer Support</h3>
            <p className='text-start text-xl'>we have a dedicated team in the USA as well as in Bangladesh to support.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature