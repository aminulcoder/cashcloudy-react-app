'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { CreditCardIcon, XMarkIcon } from '@heroicons/react/24/outline'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

export default function AddMoney() {
  const [open, setOpen] = useState(true)

  return (

    <AuthenticatedLayout>
    <Dialog open={open} onClose={setOpen} className="relative z-10">
   
      <div className="fixed inset-0 bg-gray-100 bg-opacity-10 transition-opacity"></div>

    
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
          >
           
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

     
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                <CreditCardIcon aria-hidden="true" className="h-6 w-6" />
              </div>
            </div>
              <div className="mt-3 text-start sm:mt-0 sm:ml-4 sm:text-left">
                <div className="text-lg font-bold text-gray-900">
                  Add money from card
                </div>
                <p className="text-sm text-gray-500">Please enter your card details.</p>
              </div>

        
            <form className="space-y-4 mt-6">
            
              <div className="flex space-x-4">
                <div className="flex-grow">
                  <label className="block text-sm text-gray-600">Card number</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      className="block w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="absolute left-2 top-2 flex items-center h-full">
                      <img src="https://via.placeholder.com/24" alt="Card Icon" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="w-1/4">
                  <label className="block text-sm text-gray-600">CVV</label>
                  <input
                    type="text"
                    placeholder="•••"
                    className="block w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

             
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label className="block text-sm text-gray-600">Expiry</label>
                  <input
                    type="text"
                    placeholder="MM / YYYY"
                    className="block w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex-grow">
                  <label className="block text-sm text-gray-600">Address</label>
                  <input
                    type="text"
                    placeholder="123 Dream Avenue, New York, USA"
                    className="block w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

          
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                >
                  Add Now
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                >
                  Cancel
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
    </AuthenticatedLayout>
  )
}
