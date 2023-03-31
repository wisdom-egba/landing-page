import React from "react"

import { BsArrowUpRight } from "react-icons/bs"
const CategoryCard = ({ icon, title }) => {
  return (
    <div className="">
      <div className="category-card bg-white  py-3 md:ml-3 mb-3 rounded-md flex justify-between items-center px-4  cursor-pointer group/edit shadow-md border border-transparent hover:border-[#20B486]">
        <div className="flex gap-4">
          {icon}
          <h1 className="text-lg">{title}</h1>
        </div>
        <div className="group-hover/edit:bg-[#20B486] rounded-md p-2">
          <BsArrowUpRight
            size={22}
            className="arrow-icon"
            style={{
              color: "#20B486",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
