import axios from "axios";

export const API = axios.create({
  baseURL: "https://vidsphere-oj07.onrender.com/api/v1",
  withCredentials: true,
});