import React from "react"
import logo1 from "../assets/company-logo-1.png"
import logo2 from "../assets/company-logo-2.png"
import logo3 from "../assets/company-logo-3.png"
import logo4 from "../assets/company-logo-4.png"

const Companies = () => {
  return (
    <div className="w-full bg-white py-[10px]">
      <div className="max-w-[370px] md:max-w-[1480px] m-auto text-center py-10">
        <h1 className="text-2xl font-bold text-[#536E96]">
          Trusted by over 25,000 teams around the world
        </h1>
        <p className="text-xl">
          Leading companies use the same courses to help employees keep their
          skill
        </p>
        <div className=" grid grid-cols-2  md:flex justify-center py-4 md:py-8 md:gap-8 gap-2">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Companies
