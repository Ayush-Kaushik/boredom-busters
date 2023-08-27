import React, { createContext, useContext, useReducer, Reducer } from 'react';
import { images, ActivityImage } from '../constants';

interface Bored {
    activity: string,
    type: string,
    participants: number,
    price: number,
    link: string,
    key: number,
    accessibility: number
}

interface CovidWarning {
    message: string;
    shouldWarn: boolean;
}

interface Props {
    children: JSX.Element
}

interface State {
    bored: Bored;
    loading: boolean;
    image: ActivityImage;
    covidWarning: CovidWarning;
}

type Action = { type: string; payload: Bored; };

const initialState: State = {
    bored: {
        activity: '',
        type: '',
        participants: 0,
        price: 0.0,
        link: '',
        key: 0,
        accessibility: 0
    },
    loading: false,
    image: {
        url: '',
        alt: ''
    },
    covidWarning: {
        message: '',
        shouldWarn: false
    }
};

const ActivityContext = createContext<{ activityState: State; dispatch: React.Dispatch<any> }>({ activityState: initialState, dispatch: () => null });

export const useActivity = () => {
    return useContext(ActivityContext);
}

const activityReducer: Reducer<State, Action> = (currentState: State, action: Action) => {

    switch (action.type) {
        case 'find_new_activity':
            const activityImage: ActivityImage = images[action.payload.type];
            const covidWarning: CovidWarning = {
                message: '',
                shouldWarn: false
            }

            if (action.payload.participants > 1) {
                covidWarning.message = "Covid Alert";
                covidWarning.shouldWarn = true;
            }

            return { ...currentState, bored: action.payload, image: { url: activityImage.url, alt: activityImage.alt }, covidWarning: covidWarning }

        default:
            return currentState;
    }
}

export const ActivityProvider = (props: Props): JSX.Element => {
    const [activityState, dispatch] = useReducer(activityReducer, initialState);

    return (
        <ActivityContext.Provider
            value={{ activityState, dispatch }}
        >
            {props.children}
        </ActivityContext.Provider>
    );
};
