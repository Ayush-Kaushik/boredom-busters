import React from 'react';
import { Trans } from 'react-i18next';

function Footer() {
    return (
        <footer className="footer">
            <p><Trans i18nKey="copyright" /></p>
            <p><Trans i18nKey="acknowledgement">{"Powered by "}<a href="https://www.boredapi.com/">{"Bored API"}</a></Trans></p>
        </footer>
    );
}

export default Footer;