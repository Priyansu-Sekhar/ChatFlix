import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatPage from './pages/ChatPage.jsx'
import AboutPage from './pages/AboutPage'
import EntryPage from './pages/EntryPage'
import Contact from './components/Contact'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

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