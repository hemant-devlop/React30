import React from 'react'
import { ThemeContext } from './ThemeContext'


//context api dark mode toggel

export const ThemeProvider=({children})=>{
    const[isDarkMode,setIsDarkMode]=React.useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode ? JSON.parse(savedMode) : false;
      });

    React.useEffect(() => {
        localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
      }, [isDarkMode]);

  const toggleTheme=()=>{
        setIsDarkMode(isDarkMode=>!isDarkMode)
    }
    return (
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};
