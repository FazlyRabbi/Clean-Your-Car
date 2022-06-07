import React from "react";
import Header from "../Header/Header";
import mypic from "../../img/mypic.jpg";

function AboutUs() {
  return (
    <div>
      <Header />

      <div className="container mx-auto flex  flex-col align-center ">
        <img
          src={mypic}
          alt=""
          className="object-center mt-20 h-[600px] w-[500px] justify-self-center "
        />

        <div className="text-center">
          <p className="font-bold mt-12 text-[20px]">
            My goal is to be a full Stack web-developer but my present focus on
            frontend development. After finishing my frontend jurney i search
            fro job.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
