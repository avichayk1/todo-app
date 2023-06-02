import { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext();
export function useUser() {
  return useContext(UserContext);
}
const getUser = () => {
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);
  return user ? user : null;
};

function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (getUser()) {
      setUser(getUser());
    } else {
      localStorage.setItem(
        'user',
        JSON.stringify({
          user: null,
          admin: null,
        })
      );
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
