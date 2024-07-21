import React, { useContext } from 'react'
import './styles/Day16.css'
import { ThemeContext } from './context/ThemeContext'

const Day16 = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    console.log(isDarkMode)
    return (
        <div className={isDarkMode?'dark-mode':'light-mode'}>
                <button onClick={toggleTheme}>
                    switch to {isDarkMode?'light':'dark'} mode
                </button>
                <h2>my name is hemant kumar form haryana</h2>
        </div>
    )
}

export default Day16
