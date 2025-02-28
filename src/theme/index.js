import React, { useState } from 'react';
import { Outlet } from 'react-router';
import './theme.scss'; // Create this Sass file for styling

const ThemeChanger = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`theme-changer ${isDarkTheme ? 'dark_mode' : 'light_mode'}`}>
            {Outlet}
        </div>
    );
};

export default ThemeChanger;