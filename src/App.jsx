import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import AboutPage from './pages/AboutPage';
import EntryPage from './pages/EntryPage';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import AuthContext from './contexts/AuthContext';
import ChatContext from './contexts/ChatContext';
import useAuth from './hooks/useAuth.js';
import useChat from './hooks/useChat.js';



const App = () => {
  const auth = useAuth();
  const chat = useChat();
  return (
    <AuthContext.Provider value={auth}>
      <ChatContext.Provider value={chat}>
        <BrowserRouter>
          <Routes>
            <Route path="/Chat" element={<ChatPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<EntryPage />} />
            <Route path="/entry" element={<EntryPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ChatContext.Provider>
    </AuthContext.Provider>
  );
}

export default App