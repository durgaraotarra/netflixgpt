import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success("Logout successfully")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="absolute w-full top-0 left-0 px-8 py-5  shadow-md border-b">
      <div className="flex justify-between align-middle">
        <NavLink to="/">
          <span className="text-4xl font-bold text-gray-900">D</span>
        </NavLink>
        {user === null ? (
          <div className="flex">
            <NavLink
              to="/signin"
              className="px-3 py-2 bg-indigo-600 text-white transition-all text-lg font-semibold hover:bg-indigo-500"
            >
              Sign in
            </NavLink>
          </div>
        ) : (
          <div className="flex">
            {user.photoUrl ? <img src={user.photoUrl} alt="profile image" className="me-2" /> : <span className="w-14 h-14 rounded-full me-3 bg-gray-400"></span>}            
            <button
              className="px-6 py-3 bg-indigo-600 text-white transition-all text-lg font-semibold hover:bg-indigo-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
