import { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import { AppTheme, darkTheme, lightTheme } from "./theme";


const ThemeContext = createContext<AppTheme>(darkTheme);

export const ThemeProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const scheme = useColorScheme();
    const theme = scheme == 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);