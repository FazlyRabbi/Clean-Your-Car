import React from "react";
import "./services.css";
import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

function Services() {
  const [user] = useAuthState(auth);

  return (
    <div id="services" className="services mt-[5rem] mb-[5rem] ">
      <div className="container mx-auto ">
        <h1 className="text-center  uppercase text-[3rem] mb-6 font-bold">
          Choose Your Plan
        </h1>
        <div className="card-wrapper flex  text-center justify-center flex-wrap">
          <div className="card-2 text-white m-12 p-10 pt-18 rounded-lg">
            <h3 className="card-title text-red-600 font-bold text-[1.5rem] ">
              Basic Cleaning
            </h3>
            <h3 className="card-price text-[3.5rem] font-bold mb-[2rem]">
              30$
            </h3>

            <div className="text-des text-left pl-[4rem] text-[1.2rem] capitalize leading-relaxed">
              <h3 className="card-description mb-3 ">
                <FiCheck className="inline-block " /> Exterior Washing
              </h3>
              <h3 className="card-description   ">
                <FiCheck className="inline-block " /> Interior wet cleaning
              </h3>
              <h3 className="card-description  ">
                <FiX className="inline-block" /> Window wiping
              </h3>
              <h3 className="card-description mb-[3rem]  ">
                <FiX className="inline-block" /> Vacuum Cleaning
              </h3>
            </div>

            <NavLink
              to={user?.uid ? "/checkout" : "/login"}
              className="card-description bg-red-600 py-[10px] px-[15px]   font-bold rounded  cursor-pointer "
            >
              Order Now
            </NavLink>
          </div>
          <div className="card-3 text-white p-10 m-12 pt-18 rounded-lg">
            <h3 className="card-title text-red-600 font-bold text-[1.5rem] ">
              Premium Service
            </h3>
            <h3 className="card-price text-[3.5rem] font-bold mb-[2rem]">
              36$
            </h3>

            <div className="text-des text-left pl-[4rem] text-[1.2rem] capitalize leading-relaxed">
              <h3 className="card-description mb-3 ">
                <FiCheck className="inline-block " /> Exterior Washing
              </h3>
              <h3 className="card-description   ">
                <FiCheck className="inline-block " /> Interior wet cleaning
              </h3>
              <h3 className="card-description  ">
                <FiCheck className="inline-block " /> Window wiping
              </h3>
              <h3 className="card-description mb-[3rem]  ">
                <FiCheck className="inline-block " /> Vacuum Cleaning
              </h3>
            </div>

            <NavLink
              to={user?.uid ? "/checkout" : "/login"}
              className="card-description bg-red-600 py-[10px] px-[15px]   font-bold rounded  cursor-pointer "
            >
              Order Now
            </NavLink>
          </div>
          <div className="card-1 text-white p-10 m-12 pt-18 rounded-lg">
            <h3 className="card-title text-red-600 font-bold text-[1.5rem] ">
              Express Washing
            </h3>
            <h3 className="card-price text-[3.5rem] font-bold mb-[2rem]">
              12$
            </h3>

            <div className="text-des text-left pl-[4rem] text-[1.2rem] capitalize leading-relaxed">
              <h3 className="card-description mb-3 ">
                <FiCheck className="inline-block " /> Exterior Washing
              </h3>
              <h3 className="card-description   ">
                <FiX className="inline-block" /> Interior wet cleaning
              </h3>
              <h3 className="card-description  ">
                <FiX className="inline-block" /> Window wiping
              </h3>
              <h3 className="card-description mb-[3rem]  ">
                <FiX className="inline-block" /> Vacuum Cleaning
              </h3>
            </div>

            <NavLink
              to={user?.uid ? "/checkout" : "/login"}
              className="card-description bg-red-600 py-[10px] px-[15px]   font-bold rounded  cursor-pointer "
            >
              Order Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
