import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { themeImages } from '../constants';
import { Trans } from 'react-i18next';

const Header: React.FC = ({ children }) => {
    const { darkMode, setDarkMode } = useTheme();

    return (
        <header className={darkMode ? `header dark-header` : `header light-header`}>
            <div className="header-center-content">
                <h1><Trans i18nKey="title" /></h1>
            </div>

            <div className="header-right-content">
                <button className={darkMode ? `button dark-button` : `button light-button`} onClick={() => { setDarkMode(!darkMode) }}>{darkMode ? <img alt={"logo"} src={`/images/${themeImages["light"].url}`} /> : <img alt={"logo"} src={`/images/${themeImages["dark"].url}`} />}</button>
            </div>

            {children !== null ? children : <></>}
        </header>
    );
}

export default Header;