import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    title: "Bored?",
                    copyright: "© 2021 Ayush Kaushik",
                    cta: "Lets do something about it!",
                    covidAlert: "Covid Alert: Please refrain from activities with more than one participant",
                    acknowledgement: "Powered by <1>Bored API</1>"
                }
            },
            fr: {
                translation: {
                    title: "Ennuyé?",
                    copyright: "© 2021 Ayush Kaushik",
                    cta: "Faisons quelque chose à ce sujet !",
                    covidAlert: "Alerte Covid : veuillez vous abstenir d'activités avec plus d'un participant",
                    acknowledgement: "Alimenté par <1>Bored API</1>"
                }
            },
            de: {
                translation: {
                    title: "Gelangweilt?",
                    copyright: "© 2021 Ayush Kaushik",
                    cta: "Lasst uns etwas dagegen tun!",
                    covidAlert: "Covid Alert: Bitte sehen Sie von Aktivitäten mit mehr als einem Teilnehmer ab",
                    acknowledgement: "Unterstützt von <1>Bored API</1>"
                }
            },
            hi: {
                translation: {
                    title: "क्या आप बोर हो रहे हैं?",
                    copyright: "© 2021 Ayush Kaushik",
                    cta: "चलो इसके बारे में कुछ करते हैं!",
                    covidAlert: "कोविड अलर्ट: कृपया एक से अधिक प्रतिभागियों वाली गतिविधियों से बचें",
                    acknowledgement: "<1>Bored API</1> द्वारा संचालित"
                }
            },
            pa: {
                translation: {
                    title: "ਕੀ ਤੁਸੀਂ ਬੋਰ ਹੋ?",
                    copyright: "© 2021 Ayush Kaushik",
                    cta: "ਆਓ ਇਸ ਬਾਰੇ ਕੁਝ ਕਰੀਏ!",
                    covidAlert: "ਕੋਵਿਡ ਅਲਰਟ: ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਤੋਂ ਵੱਧ ਭਾਗੀਦਾਰਾਂ ਨਾਲ ਗਤੀਵਿਧੀਆਂ ਤੋਂ ਪਰਹੇਜ਼ ਕਰੋ",
                    acknowledgement: "<1>Bored API</1> ਦੁਆਰਾ ਸੰਚਾਲਿਤ"
                }
            }
        },
        react: {
            wait: true
        }
    });

export default i18n;