import React from "react";

//theme options with specific colour values
export const themes = {
    light: {
        foreground: "#387BDF",
        background: "#FAFAFF"
    },
    dark: {
        foreground: "#FAFAFF",
        background: "#387BDF"
    }
};

//named export for this context (to be used via useContext elsewhere)
export const ThemeContext = React.createContext(themes.light);

//the provider wrapper for this context. uses its own state to keep track of which theme is in use
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = React.useState(themes.light);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

//how could we add a button to switch themes?