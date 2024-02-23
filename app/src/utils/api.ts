import axios, { AxiosRequestConfig } from "axios";
import {
  UserCredentialsParams,
  CreateUserParams,
  User,
  UpdateStatusParams,
  Group,
  CreateGroupParams,
  RemoveGroupRecipientParams,
  UpdateGroupOwnerParams,
  UpdateGroupDetailsPayload,
  
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
export const fetchGroups = () => axiosClient.get<Group[]>(`/groups`, config);

export const createGroup = (params: CreateGroupParams) =>
  axiosClient.post(`/groups`, params, config);

export const removeGroupRecipient = ({
  id,
  userId,
}: RemoveGroupRecipientParams) =>
  axiosClient.delete<Group>(`/groups/${id}/recipients/${userId}`, config);

export const updateGroupOwner = ({ id, newOwnerId }: UpdateGroupOwnerParams) =>
  axiosClient.patch(`/groups/${id}/owner`, { newOwnerId }, config);

export const leaveGroup = (id: number) =>
  axiosClient.delete(`/groups/${id}/recipients/leave`, config);

export const updateGroupDetails = ({ id, data }: UpdateGroupDetailsPayload) =>
  axiosClient.patch<Group>(`/groups/${id}/details`, data, config);
