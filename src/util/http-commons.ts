import axios from "axios";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL; //`http://${window.location.hostname}/`;

// local vue api axios instance
function baseAxios() {
  const instance = axios.create({
    baseURL: VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  return instance;
}

export { baseAxios };
