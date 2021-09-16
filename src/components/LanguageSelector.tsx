import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { languages, ILanguage } from '../constants';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const { darkMode } = useTheme();

    const handleSelect = (e: any) => {
        i18n.changeLanguage(e.target.value);
        window.location.reload();
    }

    return (
            <select className={darkMode ? `dark-selector selector` : `light-selector selector`}
                value={i18n.language}
                onChange={(e) => {
                    handleSelect(e)
                }}>
                {Object.keys(languages).map((language: string) => (
                    <option value={language} key={language} >
                        {languages[language as keyof ILanguage].nativeName}
                    </option>
                ))}
            </select>
    );
}

export default LanguageSelector;