import React from "react"
import profile from "../assets/avatar.png"
import quote from "../assets/quotationMark.png"
const FeedBackCard = () => {
  return (
    <div className="bg-white p-8 my-5 shadow-xl rounded-3xl ml-3">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <img src={profile} alt="" />
          <div>
            <h1>Jenny Wilson</h1>
            <p>UI-UX Designer</p>
          </div>
        </div>
        <img className="w-[25px] h-9" src={quote} alt="" />
      </div>
      <div className="py-8">
        <p className="text-lg ">
          `There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
      </div>
    </div>
  )
}

export default FeedBackCard
