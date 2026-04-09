import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatPage from './pages/ChatPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import EntryPage from './pages/EntryPage.jsx';
import Contact from './components/Contact.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/entry" element={<EntryPage />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App