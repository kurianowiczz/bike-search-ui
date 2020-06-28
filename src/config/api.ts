import axios from "axios";

export interface Route {
  key: string;
  title: string;
  description: string;
  method: "get" | "post";
  path: string;
}

export const config: Route[] = [
  {
    key: "bike",
    title: "Get all unfound bikes",
    description: "Get all unfound bikes",
    method: "get",
    path: "/bike"
  },
  {
    key: "bike",
    title: "Add new bike request",
    description: "Get all unfound bikes",
    method: "post",
    path: "/bike"
  },
  {
    key: "officer",
    title: "Get all officers",
    description: "Get all officers",
    method: "get",
    path: "/officer"
  },
  {
    key: "officer",
    title: "Add new officer",
    description: "Add new officer",
    method: "post",
    path: "/officer"
  }
];

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 3000
});

export default axiosInstance;
