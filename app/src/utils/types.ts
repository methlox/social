export type UserCredentialsParams = {
  username: string;
  password: string;
};

export type CreateUserParams = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type Profile = {
  id: number;
  about?: string;
  avatar?: string;
  banner?: string;
};

export type UserPresence = {
  id: number;
  statusMessage?: string;
  showOffline: boolean;
};

export type UserPeer = {
  id: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  profile?: Profile;
  presence?: UserPresence;
  peer: UserPeer;
};

export type SelectableTheme = "dark" | "light";

export type UserSidebarRouteType =
  | "conversations"
  | "friends"
  | "connections"
  | "settings"
  | "calls";

export type UserSidebarItemType = {
  id: UserSidebarRouteType;
  pathname: string;
};

export type Conversation = {
  id: number;
  creator: User;
  recipient: User;
  createdAt: string;
  lastMessageSent: MessageType;
};

export type MessageType = {
  id: number;
  content?: string;
  createdAt: string;
  author: User;
  conversation: Conversation;
  attachments?: MessageAttachment[];
};

export type MessageAttachment = {
  key: string;
};

export type Friend = {
  id: number;
  sender: User;
  receiver: User;
  createdAt: number;
};

export type FriendRequest = {
  id: number;
  sender: User;
  receiver: User;
  createdAt: number;
  status: FriendRequestStatus;
};

export type FriendRequestStatus = 'accepted' | 'pending' | 'rejected';

export type FriendRequestDetailsType = {
  status: string;
  displayName: string;
  user: User;
  incoming: boolean;
};

export type Group = {
  id: number;
  title?: string;
  users: User[];
  creator: User;
  owner: User;
  messages: GroupMessageType[];
  createdAt: number;
  lastMessageSent: MessageType;
  lastMessageSentAt: Date;
  avatar?: string;
};

export type GroupMessageType = {
  id: number;
  content?: string;
  createdAt: string;
  author: User;
  group: Group;
  attachments?: MessageAttachment[];
};

export type SettingsSidebarRouteType =
  | 'profile'
  | 'security'
  | 'notifications'
  | 'integrations'
  | 'appearance';

export type SettingsItemType = {
  id: SettingsSidebarRouteType;
  label: string;
  pathname: string;
};

export type UserContextMenuActionType = 'kick' | 'transfer_owner' | 'profile';
export type ContextMenuItemType = {
  label: string;
  action: UserContextMenuActionType;
  color: string;
  ownerOnly: boolean;
};

export type UpdateStatusParams = {
  statusMessage: string;
};

export type CreateGroupParams = {
  users: string[];
  title: string;
};

export type RemoveGroupRecipientParams = {
  id: number;
  userId: number;
};

export type UpdateGroupOwnerParams = {
  id: number;
  newOwnerId: number;
};

export type UpdateGroupDetailsPayload = {
  id: number;
  data: FormData;
};

export enum UpdateGroupAction {
  NEW_MESSAGE = 'newMessage',
}

export type UpdateGroupPayload = {
  type?: UpdateGroupAction;
  group: Group;
};

export type GroupParticipantLeftPayload = {
  group: Group;
  userId: number;
};

export type Points = {
  x: number;
  y: number;
};

export type ContextMenuEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export type ConversationType = 'group' | 'private';

export type ConversationTypeData = {
  type: ConversationType;
  label: string;
};

export type FetchGroupMessagePayload = {
  id: number;
  messages: GroupMessageType[];
};

export type MessageEventPayload = {
  message: MessageType;
  conversation: Conversation;
};

export type CreateMessageParams = {
  id: number;
  content: string;
};

export type ConversationMessage = {
  id: number;
  messages: MessageType[];
};

export type GroupMessage = {
  id: number;
  messages: GroupMessageType[];
};

export type DeleteMessageParams = {
  id: number;
  messageId: number;
};

export type DeleteGroupMessageParams = {
  id: number;
  messageId: number;
};

export type DeleteMessageResponse = {
  conversationId: number;
  messageId: number;
};

export type DeleteGroupMessageResponse = {
  groupId: number;
  messageId: number;
};

export type EditMessagePayload = {
  id: number;
  messageId: number;
  content: string;
};

export type GroupMessageEventPayload = {
  message: GroupMessageType;
  group: Group;
};

export type CreateConversationParams = {
  username: string;
  message: string;
};

export type FetchMessagePayload = {
  id: number;
  messages: MessageType[];
};

export type DivMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type DragEvent = React.DragEvent<HTMLTextAreaElement>;
export type ClipboardEvent = React.ClipboardEvent<HTMLTextAreaElement>;
export type FormEvent = React.FormEvent<HTMLFormElement>;

export type CallPayload = {
  recipientId: number;
  conversationId: number;
  caller: User;
};

export type HandleCallType = 'accept' | 'reject';

export type AcceptedCallPayload = {
  acceptor: User;
  caller: User;
  conversation: Conversation;
};

export type SetVideoRefPayload = {
  localVideoRef?: React.RefObject<HTMLVideoElement>;
  remoteVideoRef?: React.RefObject<HTMLVideoElement>;
};

export type CallType = 'video' | 'audio';

export type CallInitiatePayload = {
  localStream: MediaStream;
  isCalling: boolean;
  activeConversationId: number;
  caller: User;
  receiver: User;
  callType: CallType;
};