"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { CreditCardIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";

export default function AddMoney() {
  const [open, setOpen] = useState(true);

  return (
    <AuthenticatedLayout>
      <div className="my-20">
        <Dialog open={open} onClose={setOpen} className="relative z-10 my-24">
          <div className="fixed inset-0 bg-gray-100 bg-opacity-10 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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

                <div>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                      <CreditCardIcon aria-hidden="true" className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-3 text-start sm:mt-0  sm:text-left">
                    <div className="text-lg font-bold text-gray-900">
                      Add money from card
                    </div>
                    <p className="text-sm text-gray-500">
                      Please enter your card details.
                    </p>
                  </div>
                </div>

                <form className="space-y-1 mt-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-start block text-sm font-medium text-gray-600"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstName"
                        placeholder="e.g. Howard"
                        onChange={(e) => setFirstname(e.target.value)}
                        className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className=" text-start block text-sm font-medium text-gray-600"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastName"
                        placeholder="e.g. Thurman"
                        onChange={(e) => setLastname(e.target.value)}
                        className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="flex-grow">
                      <label className="block text-sm text-gray-600">
                        Card number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="1234 1234 1234 1234"
                          className="block w-full px-2 py-1 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder:px-8"
                        />
                        <div className="absolute left-2 top-0 flex items-center h-full">
                          <img
                            src="/src/assets/Mastercard.svg" // Correct import path
                            alt="Card Icon"
                            className="w-5 h-5" // Adjusted size for better visibility
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-1/4">
                      <label className="block text-sm text-gray-600">CVV</label>
                      <input
                        type="text"
                        placeholder="•••"
                        className="block w-full px-4 py-1 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/3">
                      <label className="block text-sm text-gray-600">
                        Expiry
                      </label>
                      <input
                        type="text"
                        placeholder="MM / YYYY"
                        className="block w-full px-4 py-1 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="flex-grow">
                      <label className="block text-sm text-gray-600">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="123 Dream Avenue, New York, USA"
                        className="block w-full px-4 py-1 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <label
                    for="country"
                    className="text-start block text-sm font-medium text-gray-600"
                  >
                    Country
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <svg
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <label
                    for="country"
                    className="text-start block text-sm font-medium text-gray-600"
                  >
                    City
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>New Work</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <svg
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-start block text-sm font-medium text-gray-600"
                      >
                        Address 1
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstName"
                        placeholder="123 Dream Avenue"
                        onChange={(e) => setFirstname(e.target.value)}
                        className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className=" text-start block text-sm font-medium text-gray-600"
                      >
                        Address 2 (Optional)
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastName"
                        placeholder="20 Cooper Square"
                        onChange={(e) => setLastname(e.target.value)}
                        className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-start block text-sm font-medium text-gray-600"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstName"
                        placeholder="Queens"
                        onChange={(e) => setFirstname(e.target.value)}
                        className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className=" text-start block text-sm font-medium text-gray-600"
                      >
                        Zip (Optional)
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastName"
                        placeholder="000000"
                        onChange={(e) => setLastname(e.target.value)}
                        className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="pt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="inline-flex w-full justify-center rounded-md bg-[#7F56D9] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
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
      </div>
    </AuthenticatedLayout>
  );
}
