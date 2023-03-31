import React from "react"
import {
  BsVectorPen,
  BsFiletypeHtml,
  BsSunset,
  BsCamera,
  BsDatabase,
  BsHeartPulse,
} from "react-icons/bs"
import { FiArrowUpRight } from "react-icons/fi"
import { TbMicrophone2 } from "react-icons/tb"
import { MdMoney, MdOutlineBusinessCenter } from "react-icons/md"
import { CiMusicNote1 } from "react-icons/ci"
import { SiFuturelearn } from "react-icons/si"
import { TfiLightBulb, TfiMoney } from "react-icons/tfi"
import CategoryCard from "./CategoryCard"

const Categories = () => {
  return (
    <div className="w-full bg-[#E9F8F3B2] md:py-15">
      <div className="max-w-[370px] md:max-w-[1480px] m-auto grid py-10 md:py-24">
        {/* Heading */}

        <div className="pb-12">
          <h1 className=" text-3xl py-3 font-bold ">
            Most <span className="text-[#20B486]">Popular Categories</span>
          </h1>
          <p className="text-[#6D737A] py-3">
            Various version have evolved over the years, sometimes by accident
          </p>
        </div>

        {/* Grid logs */}

        <div className=" grid md:grid-cols-4 ml-3 ">
          <CategoryCard icon={<BsVectorPen size={28} />} title={"Design"} />{" "}
          <CategoryCard
            icon={<BsFiletypeHtml size={28} />}
            title={"Web Development"}
          />
          <CategoryCard
            icon={<TbMicrophone2 size={28} />}
            title={"Marketing"}
          />
          <CategoryCard
            icon={<MdOutlineBusinessCenter size={28} />}
            title={"Business"}
          />
          <CategoryCard icon={<BsSunset size={28} />} title={"Lifestyle"} />{" "}
          <CategoryCard icon={<BsCamera size={28} />} title={"Photography"} />{" "}
          <CategoryCard icon={<CiMusicNote1 size={28} />} title={"Music"} />{" "}
          <CategoryCard
            icon={<BsDatabase size={28} />}
            title={"Data Science"}
          />{" "}
          <CategoryCard
            icon={<TfiLightBulb size={28} />}
            title={"Personal Development"}
          />{" "}
          <CategoryCard
            icon={<BsHeartPulse size={28} />}
            title={"Health & Fitnesss"}
          />{" "}
          <CategoryCard icon={<TfiMoney size={28} />} title={"Finance"} />{" "}
          <CategoryCard icon={<SiFuturelearn size={28} />} title={"Teaching"} />
        </div>
      </div>
    </div>
  )
}

export default Categories
