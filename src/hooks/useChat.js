import { useState } from 'react';

// Example: useChat custom hook
const useChat = () => {
  const [messages, setMessages] = useState([]);
  // Add chat logic here
  return { messages, setMessages };
};

export default useChat;
