import React from "react"
import cta from "../assets/cta.png"

const SignUp = () => {
  return (
    <div className="w-full bg-[#E9F8F3B2] md:py-32">
      <div className="max-w-[370px] md:max-w-[1480px] m-auto py-10 md:py-10 grid md:grid-cols-2 items-center">
        <img src={cta} alt="" />
        <div className="flex flex-col justify-start item-center pb-20 mr-15">
          <h1 className="text-3xl font-bold py-3 ">
            Join <span className="text-[#20B486]">World's largest</span>{" "}
            learning platfoem today
          </h1>
          <p className="py-4">Start learning by registering for free</p>
          <div className="py-2">
            <button className="max-[780px]:w-full p-2 bg-[#20B486] text-white rounded-md">
              Sign Up for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
