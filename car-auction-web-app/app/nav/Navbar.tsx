import React from 'react'
import { AiFillCar } from 'react-icons/ai'
import Search from './Search'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md'>
        <div className='flex items-center gap-2 text-3xl font-semibold text-blue-800'>
            <AiFillCar size={34}/>
            <div>Sell - Buy Cars</div>
        </div>
        <div>
          <Search />
        </div>
        <div>Login</div>
    </header>
  )
}
