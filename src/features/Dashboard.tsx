import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { getUsers } from "../services/HttpsService";

const Dashboard = () => {
  // can be stored in redux
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getUsers();
        setUsers(data.data);
      } catch (error) {
        console.error("Error fetching users");
      }
    })();
  }, []);
  return (
    <div>
      Dashboard
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
