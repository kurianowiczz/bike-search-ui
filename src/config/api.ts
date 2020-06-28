import axios from "axios";

export interface Route {
  key: string;
  title: string;
  description: string;
  method: "get" | "post";
  path: string;
  schema?: string[];
}

export const config: Route[] = [
  {
    key: "bike",
    title: "Bike route",
    description: "Get all unfound bikes",
    method: "get",
    path: "/bike"
  },
  {
    key: "bike",
    title: "Bike route",
    description:
      "Post new bike request\nFields:\ncolor - char[3, 10]\nphone - char[5, 10]\nserialNumber - char[10]",
    method: "post",
    path: "/bike",
    schema: ["color", "phone", "serialNumber"]
  },
  {
    key: "officer",
    title: "Officer route",
    description: "Get all officers",
    method: "get",
    path: "/officer"
  },
  {
    key: "officer",
    title: "Officer route",
    description:
      "Post new officer\nFields:\nname - char[2, 15]\nsurname - char[2, 30]",
    method: "post",
    path: "/officer",
    schema: ["name", "surname"]
  }
];

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 3000
});

export default axiosInstance;
