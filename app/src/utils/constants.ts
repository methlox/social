import { UserSidebarItemType, ConversationTypeData } from "./types";

export const userSidebarItems: UserSidebarItemType[] = [
  {
    id: "conversations",
    pathname: "/conversations",
  },
  {
    id: "friends",
    pathname: "/friends",
  },
  {
    id: "connections",
    pathname: "/connections",
  },
  {
    id: "settings",
    pathname: "/settings",
  },
  {
    id: "calls",
    pathname: "/calls",
  },
];

export const chatTypes: ConversationTypeData[] = [
  {
    type: 'private',
    label: 'Private',
  },
  {
    type: 'group',
    label: 'Group',
  },
];

export enum CDN_URL {
  BASE = 'https://chuachat.ams3.cdn.digitaloceanspaces.com/',
  ORIGINAL = 'https://chuachat.ams3.cdn.digitaloceanspaces.com/original/',
  PREVIEW = 'https://chuachat.ams3.digitaloceanspaces.com/preview/',
}

export enum WebsocketEvents {
  VOICE_CALL_ACCEPTED = 'onVoiceCallAccepted',
  VOICE_CALL_HANG_UP = 'onVoiceCallHangUp',
  VOICE_CALL_REJECTED = 'onVoiceCallRejected',
  VIDEO_CALL_REJECTED = 'onVideoCallRejected',
}
