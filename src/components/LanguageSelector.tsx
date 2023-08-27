import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { languages, ILanguage } from '../constants';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const { darkMode } = useTheme();

    const handleSelect = (e: any) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className={darkMode ? `dark-selector selector` : `light-selector selector`}>
            <label><Trans i18nKey="language" id="language"/></label>
            <select
                value={i18n.language}
                id={"language-selector"}
                onChange={(e) => {
                    handleSelect(e)
                }}>
                {Object.keys(languages).map((language: string) => (
                    <option value={language} key={language} id={language}>
                        {languages[language as keyof ILanguage].nativeName}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LanguageSelector;