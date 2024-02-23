import React from "react";

const ProtectedError: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        You need to sign in or register to view the requested Path
      </div>
    </div>
  );
};

export default ProtectedError;
