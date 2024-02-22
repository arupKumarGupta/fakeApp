import React from "react";
import SignIn from "./SignIn";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { openModal } from "../redux/uiSlice";
import Register from "./Register";

const Navbar: React.FC = () => {
  const { isModalOpen, modalType } = useSelector(
    (state: RootState) => state.ui
  );
  const dispatch = useDispatch();
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-white font-bold cursor-pointer">
                Abhishek
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 text-white">
                  {/* Your navigation links */}
                  <div
                    onClick={() => {
                      dispatch(openModal("login"));
                    }}
                  >
                    Sign In
                  </div>
                  <div
                    onClick={() => {
                      dispatch(openModal("register"));
                    }}
                  >
                    Register
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Additional actions or buttons */}
            </div>
          </div>
        </div>
      </nav>
      {isModalOpen && modalType === "login" && <SignIn />}
      {isModalOpen && modalType === "register" && <Register />}
    </>
  );
};

export default Navbar;
