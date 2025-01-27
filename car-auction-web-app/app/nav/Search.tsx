'use client'

import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search() {

  return (
    <div className='flex w-[50%] items-center border-2 rounded-full py-2 shadow-sm'>
        <input type="text" 
            placeholder='Search by make, model or colour'
            className='flex-grow
            pl-5
            bg-transparent
            focus:outline-none
            border-transparent
            focus:border-transparent
            focus:ring-0
            text-sm text-gray-600'
            />

        <button>
            <FaSearch size={34} className='bg-blue-500 text-white rounded-full p-3 cursor-pointer mx-2'/>
        </button>
    </div>
  )
}
