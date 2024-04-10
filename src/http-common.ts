import axios from "axios";

export default axios.create({
  baseURL: "http://52.66.81.158:3001",
  headers: {
    "Content-type": "application/json",
  }
});