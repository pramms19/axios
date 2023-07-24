import axios from "axios";

const baseURL = "http://localhost:5000";

const headers = {
  "Content-type": "application/json",
};

const axiosClient = axios.create({
  baseURL,
  headers,
});

export { axiosClient };
