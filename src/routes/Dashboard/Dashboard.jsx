import React from "react";
import { useParams } from "react-router-dom";

const Dashboard = ({ test }) => {
  const { id } = useParams();
  console.log(test);
  return (
    <div className="dashboard">
      <h1>TODO Dashboard {id}</h1>
    </div>
  );
};

export default Dashboard;
