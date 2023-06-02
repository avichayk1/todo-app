import { useContext, useState } from 'react';
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
export function ThemeProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('current')
  );
  return (
    <ThemeContext.Provider>
      <ThemeUpdateContext.Provider>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
