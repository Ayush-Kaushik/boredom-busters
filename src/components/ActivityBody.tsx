import axios from 'axios';
import React from 'react';
import { ActivityImage } from '../constants';
import {useActivity} from '../context/ActivityContext';
import { useTheme } from '../context/ThemeContext';

const ActivityBody: React.FC = () => {

    const { darkMode, setDarkMode } = useTheme();
    const {activityState, dispatch} = useActivity();
    const {activity, type, participants, link} = activityState.bored;
    const {message, shouldWarn} = activityState.covidWarning;
    const image: ActivityImage = activityState.image;

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

            {shouldWarn ? <p className={`covid-warning`}>{message}</p> : <></>}
            
            <button className={darkMode ? `button dark-button` : `button light-button`} onClick={() => {
                getNewActivity()
            }}>Let's do Something about it!</button>
        </div>
    );
}

export default ActivityBody;