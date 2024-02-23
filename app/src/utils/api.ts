import axios, { AxiosRequestConfig } from "axios";
import { UserCredentialsParams, CreateUserParams } from "./types";

const API_URL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const postLoginUser = (data: UserCredentialsParams) =>
  axiosClient.post(`/auth/login`, data, config);

export const postRegisterUser = (data: CreateUserParams) =>
  axiosClient.post(`/auth/register`, data, config);

export const checkUsernameExists = (username: string) =>
  axiosClient.get(`/users/check?username=${username}`, config);
