import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Withdraw = () => {
  return (
    <div>
      <div className="inline-flex justify-center bg-gray-200 rounded-full ">
        <CheckIcon className='h-12 w-12 sm:h-16 sm:w-16 p-4 font-bold text-violet-700' />
      </div>
      <div className="py-6">
        <h1 className='text-xl sm:text-4xl font-bold'>Congratulations your payment is successfully send</h1>
      </div>

      <div className="bg-violet-600 rounded-lg">
        <button className=' bg-violet-600 text-white py-2'>Back to Home</button>
      </div>
    </div>
  )
}

export default Withdraw