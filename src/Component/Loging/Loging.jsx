import React, { useState, useEffect } from "react";
import { auth } from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

function Loging() {
  const [signInWithEmail, user, hookError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "invalid email" });
    }
  };

  const handlPasswordChange = (e) => {
    const passwordRegex = /.{8,}/;
    const vaildPassword = passwordRegex.test(e.target.value);

    if (vaildPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "minimum 8 characters" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmail(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;
        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("your account dose not exist!");
      }
    }
  }, [hookError, googleError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || googleUser) {
      navigate(from);
    }
  }, [user, googleUser]);

  return (
    <div className="w-full login h-screen flex items-center justify-center ">
      <form onSubmit={handleLogin}>
        <div className="bg-gray-200  w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col  ">
          <label className="font-light text-4xl mb-4 text-center">
            Log<span className="font-bold">in</span>
          </label>
          <input
            type="text"
            className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
            placeholder="Email"
            onChange={handleEmailChange}
          />

          {errors.email ? (
            <span className="text-red-500 text-left mb-[15px]">
              {errors.email}
            </span>
          ) : (
            ""
          )}

          <input
            type="password"
            className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
            placeholder="Password"
            onChange={handlPasswordChange}
          />
          {errors.password ? (
            <span className="text-red-500 text-left mb-[15px]">
              {errors.password}
            </span>
          ) : (
            ""
          )}
          <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">
            Login
          </button>

          <NavLink
            to={"/signup"}
            className="text-right capitalize text-blue-500 mb-4"
          >
            signup .
          </NavLink>

          <label className="text-gray-800 mb-4 text-center">or</label>
          <button
            className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"
            onClick={() => signInWithGoogle()}
          >
            Sign with Google
          </button>
        </div>

        <ToastContainer />
      </form>
    </div>
  );
}

export default Loging;
