import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

const MyTheme = createContext<{
    theme: boolean;
    setTheme: Dispatch<SetStateAction<boolean>>;
} | undefined>(undefined);

type ProviderProps = {
    children: ReactNode;
};

const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<boolean>(true);

    return (
        <MyTheme.Provider value={{ theme, setTheme }}>
            {children}
        </MyTheme.Provider>
    );
};

export { MyTheme, ThemeProvider };
