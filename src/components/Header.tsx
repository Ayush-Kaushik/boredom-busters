import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Trans, useTranslation } from 'react-i18next';

const Header: React.FC = ({ children }) => {
    const { darkMode, setDarkMode } = useTheme();
    const { t } = useTranslation();

    return (
        <header className={darkMode ? `header dark-header` : `header light-header`}>
            <div className="header-left-content">
                <h1><Trans i18nKey="title" /></h1>
            </div>

            <div className="header-right-content">
                {children !== null ? children : <></>}
                <button className={darkMode ? `button dark-button` : `button light-button`} onClick={() => { setDarkMode(!darkMode) }}>{darkMode ? <Trans i18nKey="lightModeToggle" id="lightModeToggle"/> : <Trans i18nKey="darkModeToggle" id="darkModeToggle"/>}</button>
            </div>
        </header>
    );
}

export default Header;