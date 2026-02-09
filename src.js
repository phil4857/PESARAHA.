import axios from "axios";

const API_BASE = "https://<your-render-api>.onrender.com";

export const registerUser = (data) => axios.post(`${API_BASE}/register`, data);
export const payMembership = (userId) => axios.post(`${API_BASE}/pay-membership/${userId}`);
export const getRewards = (userId) => axios.get(`${API_BASE}/rewards/${userId}`);
export const requestWithdrawal = (userId, amount) => axios.post(`${API_BASE}/withdrawals/${userId}`, { amount });
export const approveWithdrawal = (withdrawalId) => axios.post(`${API_BASE}/admin/approve/${withdrawalId}`);
export const rejectWithdrawal = (withdrawalId) => axios.post(`${API_BASE}/admin/reject/${withdrawalId}`);
