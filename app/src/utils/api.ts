import axios, { AxiosRequestConfig } from "axios";
import {
  UserCredentialsParams,
  CreateUserParams,
  User,
  UpdateStatusParams,
} from "./types";

const API_URL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const postLoginUser = (data: UserCredentialsParams) =>
  axiosClient.post(`/auth/login`, data, config);

export const postRegisterUser = (data: CreateUserParams) =>
  axiosClient.post(`/auth/register`, data, config);

export const checkUsernameExists = (username: string) =>
  axiosClient.get(`/users/check?username=${username}`, config);

export const getAuthUser = () => axiosClient.get<User>(`/auth/status`, config);

export const updateStatusMessage = (data: UpdateStatusParams) =>
  axiosClient.patch("/users/presence/status", data, config);

export const logoutUser = () => axiosClient.post("/auth/logout", {}, config);
