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

function App() {
  return (
    <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
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
          {/* <Route path="calls" element={<CallsPage />}>
            <Route path="current" element={<CurrentCallPage />} />
          </Route> */}
        </Route>
      </Routes>
  );
}

export default App;
