import React from "react"
import header from "../assets/logo (1).svg"
import { FiYoutube, FiInstagram, FiFacebook } from "react-icons/fi"
import { SlSocialLinkedin } from "react-icons/sl"
import { AiOutlineReddit } from "react-icons/ai"
const Footer = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[370px] md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-col-6 py-10 md:py-10">
        {/* section 1 */}
        <div className="mx-4 col-span-2">
          <img src={header} className="w-[33%] py-4" alt="" />
          <h1 className="text-lg font-bold py-2">Contact Us</h1>
          <p className="text-md text-[#6D737A] py-3">Call: +234*********</p>
          <p className="pt-3 font-medium text-md text-[#6D737A]">
            We render wide range of services. You can also contact us from the
            link below
          </p>
          <h2 className="py-2 text-[#6D737A]">Email: example@mail.com</h2>
          <div className="flex justify-between py-4">
            <FiFacebook
              size={35}
              style={{
                color: "#20B486",
                padding: "4px",
                backgroundColor: "#E9F8F3B2",
              }}
            />
            <AiOutlineReddit
              size={35}
              style={{
                color: "#20B486",
                padding: "4px",
                backgroundColor: "#E9F8F3B2",
              }}
            />
            <SlSocialLinkedin
              size={35}
              style={{
                color: "#20B486",
                padding: "4px",
                backgroundColor: "#E9F8F3B2",
              }}
            />
            <FiInstagram
              size={35}
              style={{
                color: "#20B486",
                padding: "4px",
                backgroundColor: "#E9F8F3B2",
              }}
            />
            <FiYoutube
              size={35}
              style={{
                color: "#20B486",
                padding: "4px",
                backgroundColor: "#E9F8F3B2",
              }}
            />
          </div>
        </div>

        {/* section 2 */}
        <div className="mx-4 max-[780px]:col-span-2">
          <h1 className="py-4 text-lg font-bold">Explore</h1>
          <ul className="text-md text-[#6D737A] leading-10 cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* section 3 */}
        <div className="mx-4">
          <h1 className="py-4 text-lg font-bold">Category</h1>
          <ul className="text-md text-[#6D737A] leading-10">
            <li>Design</li>
            <li>Development</li>
            <li>Marketing</li>
            <li>Business</li>
            <li>Lifestyle</li>
            <li>Photography</li>
            <li>Music</li>
          </ul>
        </div>
        {/* section 4 */}

        <div className="mx-4 max-[780px]:col-span-2">
          <h1 className="py-4 text-lg font-bold">Subscribe</h1>
          <p className="pt-3 font-medium text-md text-[#6D737A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form className="py-4 " action="">
            <input
              type="email"
              placeholder="Email here"
              className="p-2 rounded-md bg-[#eeeeee] max-[700px]:w-full"
            />
          </form>
          <button className="max-[780px]:w-full p-2 bg-[#20B486] text-white rounded-md">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
