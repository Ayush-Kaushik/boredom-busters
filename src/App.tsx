import React from 'react';
import ActivityBody from './components/ActivityBody';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { ActivityProvider } from './context/ActivityContext';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ActivityProvider>
                <div className="background">
                    <Header></Header>
                    <ActivityBody></ActivityBody>
                    <Footer></Footer>
                </div>
            </ActivityProvider>
        </ThemeProvider>
    );
}

export default App;
