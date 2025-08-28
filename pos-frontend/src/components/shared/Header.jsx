import React from 'react'
import logo from '../../assets/images/logo.png'

import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
        {/* Logo Section */}
        <div>  
            <img src={logo} className="h-8 w-8" alt="restro logo"/>
            <h1 classname="text-lg font-semibold text-[#f5f5f5}">Restro</h1>
        </div>

        { /* Search Section */}
        <div className="flex item-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-[500px]">

            <FaSearch className="text-[#f5f5f5]"/>
            <input
            type="text"
            placeholder="Search"
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
            
            />
        </div>

        {/* looged user */}

        <div className="flex items-center gap-4">
          <div classname="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
            <FaBell className="text-[#f5f5f5] text-2xl"/>
          </div>
          <div className="flex item-center gap-3 cursor-pointer">
            <FaUserCircle className="text-[#f5f5f5] text-4xl"/>
            <div className="flex flex-col items-start">
              <h3 className="text-md text-[#f5f5f5] font-semibold">Fahim</h3>
              <p className="text-xs text-[#ababab] font-medium">Admin</p>
            </div>
            </div>
        </div>

    </header>
   
  )
}

export default Header