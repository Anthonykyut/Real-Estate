import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <>
        <div className='justify-between flex items-center p-3 md:p-5 bg-[#EEF1FA]'>
            
            <div>
                <img src={logo} className='w-[7rem]'/>
            </div>
            
            <div>
                <input type='text' placeholder='Search' className=' shadow-sm w-[40rem] h-[2.5rem] p-4 rounded- bg-white rounded-[2px]'/>
            </div>
 
            <div >
                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-11 h-11 rounded-full' />
               
            </div>
           

        </div>

        <div className=' Header flex space-x-10 items-center justify-center h-10 my-10' >
            <a href="#" className="block border-b-4 border-purple-500 p-2">All Properties</a>
            <a href="#" className="block p-2 hover:border-b-4 border-purple-500 ">For Sale</a>
            <a href="#" className="block p-2 hover:border-b-4 border-purple-500 ">For Rent</a>
            <a href="#" className="block p-2 hover:border-b-4 border-purple-500 ">Luxury Homes</a>
            <a href="#" className="block p-2 hover:border-b-4 border-purple-500 ">Commercial Properties</a>
            <a href="#" className="block p-2 hover:border-b-4 border-purple-500 ">New Developments</a>
        </div>
    </>
  )
}

export default Header
