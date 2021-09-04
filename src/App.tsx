import React from 'react';
import ActivityBody from './components/ActivityBody';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { ActivityProvider } from './context/ActivityContext';
import LanguageSelector from './components/LanguageSelector';
import { I18nextProvider } from "react-i18next";
import i18n from "./components/I8N";

const App: React.FC = () => {
    return (
        <I18nextProvider i18n={i18n}>
                <ThemeProvider>
                    <ActivityProvider>
                        <div className="background">
                            <Header><LanguageSelector /></Header>
                            <ActivityBody></ActivityBody>
                            <Footer></Footer>
                        </div>
                    </ActivityProvider>
                </ThemeProvider>
        </I18nextProvider>
    );
}

export default App;
