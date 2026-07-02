import { useState, createContext, useContext } from "react"


const ThemeSwticherContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, SetTheme] = useState("Light");


    const handleSelect = (e) => {
        const isChecked = e.target.checked;


        if (isChecked) {
            SetTheme("Dark")
        } else {
            SetTheme("Light")
        }


    }

    return (
        <ThemeSwticherContext.Provider
            value={{
                theme,
                SetTheme,
                handleSelect,
            }}
        >
            {children}
        </ThemeSwticherContext.Provider>
    );
}


export function useThemeContext() {

    const context = useContext(ThemeSwticherContext);

    if (!context) {
        throw new Error(
            "useTheme must be used within a ThemeProvider"
        );
    }

    return context;
}

