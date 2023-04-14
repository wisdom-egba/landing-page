import React from "react"
import heroImage from "../assets/heroImg.png"
import { AiOutlineSearch } from "react-icons/ai"

const Hero = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[370px] md:max-w-[1480px] m-auto grid md:grid-cols-2 py-10 md:py-24">
        <div>
          <p className="py-3 md:py-4 text-2xl text-[#20B486] font-medium">
            START TO SUCCESS
          </p>
          <h1 className="md:text-7xl py-4 text-5xl font-semibold md:leading-[72px]">
            Access To <span className="text-[#20B486]">5000+</span> Courses from
            <span className="text-[#20B486]">300</span> instructor &
            Institutions
          </h1>
          <p className="py-4 text-lg text-gray-600">
            Various version have evolve the years, sometimes by accident
          </p>
          <form
            action=""
            className=" input-box border outline-none border-gray-200 bg-white p-4 shadow-lg rounded-md flex items-center max-w-[700px] justify-between"
          >
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="bg-white w-[90%]"
            />
            <button>
              <AiOutlineSearch size={30} />
            </button>
          </form>
        </div>
        <img className="order-first md:order-2" src={heroImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
