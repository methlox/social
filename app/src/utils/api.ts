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
  FetchGroupMessagePayload,
  CreateMessageParams,
  DeleteGroupMessageParams,
  DeleteGroupMessageResponse,
  EditMessagePayload,
  GroupMessageType,
  Conversation,
  FetchMessagePayload,
  CreateConversationParams,
  DeleteMessageParams,
  DeleteMessageResponse,
  MessageType,
  ConversationType,
  AddGroupRecipientParams
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

export const fetchGroupMessages = (id: number) =>
  axiosClient.get<FetchGroupMessagePayload>(`/groups/${id}/messages`, config);

export const postGroupMessage = ({ id, content }: CreateMessageParams) =>
  axiosClient.post(`/groups/${id}/messages`, { content }, config);

export const deleteGroupMessage = ({
  id,
  messageId,
}: DeleteGroupMessageParams) =>
  axiosClient.delete<DeleteGroupMessageResponse>(
    `/groups/${id}/messages/${messageId}`,
    config
  );

export const editGroupMessage = ({
  content,
  id,
  messageId,
}: EditMessagePayload) =>
  axiosClient.patch<GroupMessageType>(
    `/groups/${id}/messages/${messageId}`,
    { content },
    config
  );

export const getConversations = () =>
  axiosClient.get<Conversation[]>(`/conversations`, config);

export const getConversationById = (id: number) =>
  axiosClient.get<Conversation>(`/conversations/${id}`, config);

export const getConversationMessages = (conversationId: number) =>
  axiosClient.get<FetchMessagePayload>(
    `/conversations/${conversationId}/messages`,
    config
  );

export const postNewConversation = (data: CreateConversationParams) =>
  axiosClient.post<Conversation>(`/conversations`, data, config);

export const deleteMessage = ({ id, messageId }: DeleteMessageParams) =>
  axiosClient.delete<DeleteMessageResponse>(
    `/conversations/${id}/messages/${messageId}`,
    config
  );

export const editMessage = ({ content, id, messageId }: EditMessagePayload) =>
  axiosClient.patch<MessageType>(
    `/conversations/${id}/messages/${messageId}`,
    { content },
    config
  );

export const createMessage = (
  id: string,
  type: ConversationType,
  data: FormData
) => {
  const url =
    type === "private"
      ? `/conversations/${id}/messages`
      : `/groups/${id}/messages`;
  return axiosClient.post(url, data, {
    headers: { "Content-Type": "multipart/form-data" },
    ...config,
  });
};

export const searchUsers = (query: string) =>
  axiosClient.get<User[]>(`/users/search?query=${query}`, config);
  export const addGroupRecipient = ({ id, username }: AddGroupRecipientParams) =>
  axiosClient.post(`/groups/${id}/recipients`, { username }, config);