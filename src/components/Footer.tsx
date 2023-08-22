import { Trans } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

function Footer() {

    const { darkMode } = useTheme();

    return (
        <footer className={darkMode ? `footer dark-footer` : `footer light-footer`}>
            <p><Trans i18nKey="copyright" /></p>
            <p><Trans i18nKey="acknowledgement">{"Powered by "}<a href="https://www.boredapi.com/">{"Bored API"}</a></Trans></p>
        </footer>
    );
}

export default Footer;