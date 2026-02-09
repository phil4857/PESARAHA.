import React, { useEffect, useState } from "react";
import { getRewards } from "../api/api";

const Dashboard = ({ userId }) => {
  const [rewards, setRewards] = useState(0);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    getRewards(userId).then(res => {
      setRewards(res.data.credits);
      setLastUpdated(new Date(res.data.last_updated).toLocaleString());
    });
  }, [userId]);

  return (
    <div>
      <h2>PeSaRaha🤑💰💲 Dashboard</h2>
      <p>Total Rewards: {rewards}</p>
      <p>Last Updated: {lastUpdated}</p>
    </div>
  );
};

export default Dashboard;
