import React from "react"
import Slider from "react-slick"
import { data } from "./list"
import FeedBackCard from "./FeedBackCard"

const FeedBack = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }
  return (
    <div className="w-full bg-white md:py-32">
      <div className="max-w-[370px] md:max-w-[1480px] m-auto py-10 md:py-24">
        <h1 className=" ml-4 text-3xl py-3 font-bold">
          Student <span className="text-[#20B486]">FeedBack</span>
        </h1>
        <p className="text-[#6D737A] ml-4">
          Various version have evolved over the years, sometimes by accident
        </p>
        <Slider {...settings}>
          <FeedBackCard />
          <FeedBackCard />
          <FeedBackCard />
          <FeedBackCard />
        </Slider>
      </div>
    </div>
  )
}
export default FeedBack
