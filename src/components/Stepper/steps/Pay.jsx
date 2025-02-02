import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Pay = () => {
  return (
    <div>
      <div className="inline-flex justify-center bg-gray-200 rounded-full ">
          <CheckIcon className=' w-10 h-10 sm:h-20 sm:w-20 p-2 sm:p-5 font-extrabold text-violet-700'/>
      </div>
      <div className="py-6">
        <h1 className=' text-xl sm:text-4xl  font-semibold'>Congratulations your payment is successfully send</h1>
      </div>

      <div className="bg-violet-600 rounded-lg">
        <button className=' bg-violet-600  font-semibold text-white py-2'>Back to home</button>
      </div>
    </div>
  )
}

export default Pay