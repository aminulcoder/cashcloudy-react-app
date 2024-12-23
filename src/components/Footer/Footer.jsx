import React from 'react'

const Footer = () => {
  return (
    <div className='border-t py-6 mt-12'>
        <div className="grid grid-cols-12">
            <div className="col-span-6">
                <p className='text-start'>© Cashcloudy Limited 2025</p>
            </div>
            <div className="col-span-6">
                <div className="flex justify-between px-40">
                    <p>Privacy policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer