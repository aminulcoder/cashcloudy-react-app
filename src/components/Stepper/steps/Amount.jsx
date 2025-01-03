import React from 'react'

const Amount = () => {
  return (
    <div>
      <h2 className='text-center text-gray-950 font-semibold text-3xl pb-3'>How much are you sending?</h2>

      <p className='bg-slate-200 rounded-3xl inline-block px-4 py-2'>(1 USD = 119.50 BDT)</p>
      <div className="">
        <div>
          <label for="price" class=" text-start block text-sm/6 font-medium text-gray-900">You send</label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">$</div>
              <input type="text" name="price" id="price" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="0.00" />
              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select id="currency" name="currency" aria-label="Currency" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
                <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>



      </div>
      <p className="text-start py-1">You have <strong>100 USD </strong>available in your balance </p>
      <div className="flex justify-between py-3">
        <p>Includes fees</p>
        <span className='font-bold'>3.75 USD</span>
      </div>
      <div className="flex justify-between py-3">
        <p>Should arrive</p>
        <span className='font-bold'>by Sunday, 1 January</span>
      </div>
      <div className="bg-violet-600 rounded-lg">
        <button className=' bg-violet-600 text-white py-2'>Continue</button>
      </div>

    </div>



  )
}

export default Amount