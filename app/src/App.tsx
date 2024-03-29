import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AuthenticatedRoute } from './components/AuthenticatedRoute';
import { AppPage } from './pages/AppPage';
import { ConversationPage } from './pages/conversations/ConversationPage';
import { ConversationChannelPage } from './pages/conversations/ConversationChannelPage';
import { ConversationPageGuard } from './guards/ConversationPageGuard';
import { GroupPage } from './pages/group/GroupPage';
import { GroupPageGuard } from './guards/GroupPageGuard';
import { GroupChannelPage } from './pages/group/GroupChannelPage';
import { FriendsLayoutPage } from './pages/friends/FriendsLayoutPage';
import { FriendRequestPage } from './pages/friends/FriendRequestPage';
import { SettingsPage } from './pages/settings/SettingsPage';
import { SettingsProfilePage } from './pages/settings/SettingsProfilePage';
import { SettingsAppearancePage } from './pages/settings/SettingsAppearancePage';
import { CallsPage } from './pages/calls/CallsPage';
import { CurrentCallPage } from './pages/calls/CurrentCallPage';
import { PropsWithChildren, useState } from 'react';
import { User } from './utils/types';
import { enableMapSet } from 'immer';
import { socket, SocketContext } from './utils/context/SocketContext';
import { Socket } from 'socket.io-client';
import { Provider as ReduxProvider } from 'react-redux';
import { AuthContext } from './utils/context/AuthContext';
import { store } from './store';
import HomePage from './pages/HomePage';

enableMapSet();

type Props = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  socket: Socket;
};

function AppWithProviders({
  children,
  user,
  setUser,
}: PropsWithChildren & Props) {
  return (
    <ReduxProvider store={store}>
      <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
        <SocketContext.Provider value={socket}>
          {children}
        </SocketContext.Provider>
      </AuthContext.Provider>
    </ReduxProvider>
  );
}

function App() {
  const [user, setUser] = useState<User>();
  return (
    <AppWithProviders user={user} setUser={setUser} socket={socket}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<AuthenticatedRoute children={<AppPage />} />}>
          <Route path="conversations" element={<ConversationPage />}>
            <Route
              path=":id"
              element={
                <ConversationPageGuard children={<ConversationChannelPage />} />
              }
            />
          </Route>
          <Route path="groups" element={<GroupPage />}>
            <Route
              path=":id"
              element={<GroupPageGuard children={<GroupChannelPage />} />}
            />
          </Route>
          <Route path="friends" element={<FriendsLayoutPage />}>
            <Route path="requests" element={<FriendRequestPage />} />
            <Route path="blocked" element={<div>Blocked</div>} />
          </Route>
          <Route path="settings" element={<SettingsPage />}>
            <Route path="profile" element={<SettingsProfilePage />} />
            <Route path="appearance" element={<SettingsAppearancePage />} />
          </Route>
          <Route path="calls" element={<CallsPage />}>
            <Route path="current" element={<CurrentCallPage />} />
          </Route>
        </Route>
      </Routes>
    </AppWithProviders >
  );
}

export default App;
