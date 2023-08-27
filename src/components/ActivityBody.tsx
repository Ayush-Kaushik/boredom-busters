import axios from 'axios';
import React from 'react';
import { ActivityImage } from '../constants';
import {useActivity} from '../context/ActivityContext';
import { useTheme } from '../context/ThemeContext';
import { Trans, useTranslation } from 'react-i18next';

const ActivityBody: React.FC = () => {

    const { darkMode } = useTheme();
    const {activityState, dispatch} = useActivity();
    const {activity, link} = activityState.bored;
    const {shouldWarn} = activityState.covidWarning;
    const image: ActivityImage = activityState.image;
    const { t } = useTranslation();

    const getNewActivity = () => {
        axios.get('https://www.boredapi.com/api/activity').then(({data}) => {
            dispatch({type: 'find_new_activity', payload: data});
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className={darkMode ? `activity-body dark-body` : `activity-body light-body`}>
            {image.url !== '' ? <img alt={image.alt} src={`${process.env.PUBLIC_URL}/images/${image.url}`}/> : <img alt={image.alt} src={`${process.env.PUBLIC_URL}/images/thinking-emoji.png`}/>}
            <h2>{link ?  <a href={link}>{activity}</a>: activity}</h2>

            {shouldWarn ? <p className={`covid-warning`}>{t('covidAlert')}</p> : <></>}
            
            <button className={darkMode ? `button dark-button` : `button light-button`} onClick={() => {
                getNewActivity()
            }}><Trans i18nKey="cta" id="cta"/></button>
        </div>
    );
}

export default ActivityBody;