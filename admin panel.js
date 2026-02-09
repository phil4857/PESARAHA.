import React, { useState, useEffect } from "react";
import { approveWithdrawal, rejectWithdrawal } from "../api/api";

const AdminPanel = ({ withdrawals }) => {
  return (
    <div>
      <h3>Admin Panel</h3>
      {withdrawals.map(wd => (
        <div key={wd.id}>
          <p>User: {wd.user_id} | Amount: {wd.amount} | Status: {wd.status}</p>
          <button onClick={() => approveWithdrawal(wd.id)}>Approve</button>
          <button onClick={() => rejectWithdrawal(wd.id)}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
