import React from "react"
import achievement from "../assets/achievement.png"
import { SlGraduation } from "react-icons/sl"
import { BsCameraVideo } from "react-icons/bs"
import { HiOutlineUsers } from "react-icons/hi"
const Achievement = () => {
  return (
    <div className="w-full bg-white md:py-24">
      <div className="max-w-[370px] md:max-w-[1480px] m-auto grid md:grid-cols-2 py-10 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="pb-12">
            <h1 className=" text-3xl py-3 font-bold ">
              Our <span className="text-[#20B486]">Achievement</span>
            </h1>
            <p className="text-[#6D737A] py-3">
              Various version have evolved over the years, sometimes by accident
            </p>
          </div>

          <div className=" grid grid-cols-2 ">
            <div className=" py-4 flex items-center">
              <div className="p-2 md:p-4 rounded-md bg-[#E9F8F3]">
                <SlGraduation size={35} style={{ color: "#20B486" }} />
              </div>
              <div className="p-4">
                <h1 className="text-3xl font-bold">300</h1>
                <p className="text-lg text-[#6D737A]">Instructor</p>
              </div>
            </div>
            <div className=" py-4 flex items-center">
              <div className="p-2 md:p-4 rounded-md bg-[#FFFAF5] ml-4">
                <BsCameraVideo size={35} style={{ color: "#FFC27A" }} />
              </div>
              <div className="p-4">
                <h1 className="text-3xl font-bold">10,00+</h1>
                <p className="text-lg text-[#6D737A]">Video</p>
              </div>
            </div>
            <div className=" py-4 flex items-center">
              <div className="p-2 md:p-4 rounded-md bg-[#FFEEF0] text-[#20B486]">
                <SlGraduation size={35} style={{ color: "#ED4459" }} />
              </div>
              <div className="p-4">
                <h1 className="text-3xl font-bold">20,000+</h1>
                <p className="text-lg text-[#6D737A]">Students</p>
              </div>
            </div>
            <div className=" py-4 flex items-center">
              <div className="p-2 md:p-4 rounded-md bg-[#F0F7FF] ml-4">
                <HiOutlineUsers size={35} style={{ color: "#0075FD" }} />
              </div>
              <div className="p-4">
                <h1 className="text-3xl font-bold">300</h1>
                <p className="text-lg text-[#6D737A]">Users</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="order-first md:order-2 m-auto"
          src={achievement}
          alt=""
        />
      </div>
    </div>
  )
}

export default Achievement
