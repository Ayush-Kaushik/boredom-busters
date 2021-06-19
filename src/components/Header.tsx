import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {useActivity} from '../context/ActivityContext';
import { themeImages } from '../constants';

const Header: React.FC = () => {
    const { darkMode, setDarkMode } = useTheme();
    const {activityState, dispatch} = useActivity();

    return (
        <header className={darkMode ? `header dark-header` : `header light-header`}>
            <div className="header-center-content">
                <h1>Bored?</h1>
            </div>

            <div className="header-right-content">
                <button className={darkMode ? `button dark-button` : `button light-button`} onClick={() => { setDarkMode(!darkMode) }}>{darkMode ? <img src={`/images/${themeImages["light"].url}`}/> : <img src={`/images/${themeImages["dark"].url}`}/>}</button>
            </div>
        </header>
    );
}

export default Header;