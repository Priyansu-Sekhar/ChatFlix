import { useState } from 'react';

// Example: useAuth custom hook
const useAuth = () => {
  const [user, setUser] = useState(null);
  // Add auth logic here
  return { user, setUser };
};

export default useAuth;
