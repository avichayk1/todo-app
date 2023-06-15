import { createContext, useState, useEffect, useContext } from 'react';

export const AlbumContext = createContext();

// export function useUser() {
//   return useContext(UserContext);
// // }
// const getUser = () => {
//   const userString = localStorage.getItem('user');
//   const user = JSON.parse(userString);
//   if (user) {
//     return user;
//   } else {
//     return null;
//   }
// };
function AlbumContextProvider({ children }) {
  const [albumNum, setalbumNum] = useState(0);

  return (
    <AlbumContext.Provider value={[albumNum, setalbumNum]}>
      {children}
    </AlbumContext.Provider>
  );
}

export default AlbumContextProvider;
