import { Children, createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({Children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode)
    };

    return (
        <ThemeContext.Provider value{{isDarkMode, toggleTheme}}>
            {Children}
        </ThemeContext.Provider>
    )

}