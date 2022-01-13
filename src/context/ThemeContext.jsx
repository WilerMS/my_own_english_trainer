import React, {useState, useEffect} from 'react'
import {colors} from '../consts/designUitls'

// Global context
const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {

    let initialPage = localStorage.getItem('route') ? localStorage.getItem('route')  : 0;
    const [activeNavLink, setActiveNavLink] = useState(initialPage);

    const [theme, setTheme] = useState({
        fill: colors[activeNavLink].primary,
        position: activeNavLink,
        textColor: 'white',
        background: colors[activeNavLink].secondary,
        indicatorColor: colors[activeNavLink].indicator,
    });

    useEffect(() => {
        setTheme({
            fill: colors[activeNavLink].primary,
            position: (activeNavLink) * 30,
            textColor: colors[activeNavLink].color,
            background: colors[activeNavLink].secondary,
            indicatorColor: colors[activeNavLink].indicator
        });
        localStorage.setItem('route', activeNavLink)
    }, [activeNavLink]);

    return (
        <ThemeContext.Provider 
            value={{
                theme, 
                setTheme, 
                colors, 
                activeNavLink, 
                setActiveNavLink
            }}
        >
            {children}
        </ThemeContext.Provider>
    );

}

export {ThemeContext, ThemeProvider};