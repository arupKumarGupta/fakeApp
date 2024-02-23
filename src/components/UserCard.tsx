import React from "react";

// interface to be added
const UserCard: React.FC<any> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={user.avatar} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <div className="text-center">
        <div className="text-xl font-bold">
          {user.first_name} {user.last_name}
        </div>
        <div className="text-gray-500">{user.email}</div>
      </div>
    </div>
  );
};

export default UserCard;
