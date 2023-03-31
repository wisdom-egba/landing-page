import React from "react"
// import { data } from "./list"
import StarRating from "./StarRating"

const Card = ({ lists }) => {
  const { id, title, category, rating, price, linkImg } = lists
  console.log(lists)
  return (
    <div>
      <div
        key={id}
        className="p-5 bg-white drop-shadow-md overflow-hidden rounded-md m-4 "
      >
        <img
          src={linkImg}
          className="h-40 w-full object-cover rounded-md"
          alt=""
        />
        <div>
          <h4 className="truncate">{title}</h4>
          <StarRating rating={rating} review={rating} />
          <p>{price}</p>
        </div>
        <div className="absolute top-6 left-6  bg-white rounded-md">
          <h2 className="px-2">{category}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card
