import React from "react";
import SignIn from "./SignIn";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { openModal } from "../redux/uiSlice";
import Register from "./Register";
import { clearAuth } from "../redux/authSlice";

const Navbar: React.FC = () => {
  const { isModalOpen, modalType } = useSelector(
    (state: RootState) => state.ui
  );

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
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
                  {!isAuthenticated && (
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        dispatch(openModal("login"));
                      }}
                    >
                      Sign In
                    </div>
                  )}
                  {!isAuthenticated && (
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        dispatch(openModal("register"));
                      }}
                    >
                      Register
                    </div>
                  )}

                  {isAuthenticated && (
                    <div className="cursor-pointer">Dashboard</div>
                  )}

                  {isAuthenticated && (
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        dispatch(clearAuth());
                      }}
                    >
                      Logout
                    </div>
                  )}
                </div>
              </div>
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
