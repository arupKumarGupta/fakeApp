import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<any> = ({ children }: any) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  if (!isAuthenticated) return <Navigate to="/not-allowed" />;

  return children;
};

export default ProtectedRoute;
