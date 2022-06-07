import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div className="banner ">
      <div className="container mx-auto uppercase text-center text-white">
        <div className="text-wrapper pt-[12rem] ">
          <span className="text-red-500 text-[30px] tracking-[5px] leading-4">
            modern Equipment
          </span>
          <h1 className="text-[70px] font-bold">keeping your car new</h1>
          <p className="capitalize mb-[5rem]">
            Wash Your car regular to make it looking gorgeous
          </p>

          <a
            href="!#"
            className="py-[15px] px-[30px] bg-red-500 rounded-lg font-bold "
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
