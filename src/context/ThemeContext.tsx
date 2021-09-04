import { createContext, useContext, useState } from 'react';

interface ThemeMode {
    darkMode: boolean;
    setDarkMode: (theme: boolean) => void;
}

interface Props {
    children: JSX.Element
}

export const ThemeContext: React.Context<ThemeMode> = createContext<ThemeMode>({ darkMode: false, setDarkMode: (theme) => { } });

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = (props: Props) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <ThemeContext.Provider
            value={{ darkMode, setDarkMode }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};
