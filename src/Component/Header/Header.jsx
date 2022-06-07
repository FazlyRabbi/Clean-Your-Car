import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.init";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <div className="menu bg-zinc-100">
      <div className="container mx-auto">
        <div className="py-5 flex uppercase justify-center ">
          <NavLink to={"/"} className={"px-5 text-black font-bold"}>
            home
          </NavLink>

          <NavLink to={"#services"} className={"px-5 text-black font-bold"}>
            services
          </NavLink>
          <NavLink to={"/blog"} className={"px-5 text-black font-bold"}>
            blog
          </NavLink>
          <NavLink to={"/aboutus"} className={"px-5 text-black font-bold"}>
            aboutus
          </NavLink>
          <NavLink to={"/signup"} className={"px-5 text-black font-bold"}>
            signup
          </NavLink>

          {user?.uid ? (
            <button
              onClick={() => signOut(auth)}
              className={"px-5 text-black font-bold uppercase "}
            >
              LogOut
            </button>
          ) : (
            <Link to={"/login"} className={"px-5 text-black font-bold"}>
              LogIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
