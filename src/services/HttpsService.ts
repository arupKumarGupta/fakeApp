import axios from "axios";
const BASE_URL = "https://reqres.in/api";

export async function signIn(email: string, password: string): Promise<any> {
  const API_URL = `${BASE_URL}/login`;
  return await axios.post(API_URL, {
    email,
    password,
  });
}
export async function register(email: string, password: string): Promise<any> {
  const API_URL = `${BASE_URL}/register`;
  return await axios.post(API_URL, { email, password });
}

export async function getUsers(): Promise<any> {
  const API_URL = `${BASE_URL}/users`;
  return await axios.get(API_URL);
}
