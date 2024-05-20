import axios from "axios";

import { User } from "@/types";

type UserResponse = {
  message: string;
  data: {
    user: User;
  };
};

const api = axios.create({ baseURL: process.env.SERVER_URL, withCredentials: true });

const createUser = async (credentials: Pick<User, "name" | "email" | "image">) => {
  const { data } = await api.post("/user", credentials);
  return data as UserResponse;
};

const getUserByEmail = async (email: string, includeMembers = false) => {
  let url = "/user/email/" + email;
  if (includeMembers) {
    url += "?includeMembers=true";
  }
  const { data } = await api.get(url);
  return data as UserResponse;
};

export { api, createUser, getUserByEmail };
