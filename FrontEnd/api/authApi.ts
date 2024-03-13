import axios from "axios";
import useSWR from "swr";

export const authRequest = axios.create({
  baseURL: "http://localhost:8000",
});
const options: any = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
};
export function loginApi() {
  return authRequest.get(`/user`);
}
