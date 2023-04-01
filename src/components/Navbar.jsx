import React, { useState } from "react"
import logo from "../assets/logo (1).svg"
import lock from "../assets/lock.svg"

import { FaAlignJustify } from "react-icons/fa"
import { BsXLg } from "react-icons/bs"
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)
  return (
    <div className="w-full h-[80px] bg-slate-300 fixed">
      <div className="max-w-[350px] md:max-w-[1480px]  m-auto h-full w-full items-center flex justify-between">
        <img src={logo} alt="" className=" h-[25px]" />
        <div className="hidden md:flex  items-center ">
          <ul className="flex items-center gap-4  ">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex gap-2 ">
          <button className="  px-8 py-3 bg-slate-50 flex justify-between items-center bg-transparent ">
            Login <img src={lock} alt="" />
          </button>
          <button className="bg-[#20B486] px-8 py-3 rounded-md text-white font-bold border border-transparent ">
            Sign up
          </button>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          {toggle ? <BsXLg size={30} /> : <FaAlignJustify size={30} />}
        </div>
      </div>
      <div
        className={
          toggle
            ? " absolute z-10 p-4 px-8 w-full bg-white md:hidden"
            : "hidden"
        }
      >
        <ul className="p-1 text-right ">
          <li className="p-2 cursor-pointer my-2 hover:bg-gray-100  ">Home</li>
          <li className="p-2  cursor-pointer my-2 hover:bg-gray-100">About</li>
          <li className="p-2 cursor-pointer my-2 hover:bg-gray-100">Support</li>
          <li className="p-2 cursor-pointer my-2 hover:bg-gray-100">
            Platform
          </li>
          <li className="p-2 cursor-pointer my-2 hover:bg-gray-100">Price</li>
          <div className="flex flex-col my-4 gap-4 ">
            <button className=" w-full px-2 py-3 bg-gray-300 flex justify-center items-center bg-transparent rounded-md ">
              Login <img src={lock} alt="" />
            </button>
            <button className="w-full bg-[#20B486] px-8 py-3 rounded-md text-white font-bold hover:bg-[#2aca97]">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
