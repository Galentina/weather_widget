import { DayTypes } from '../types';

export const setDays = (data) => {
    return {
        type:    DayTypes.SET_DAYS,
        payload: data,
    };
};

export const setChosenDays = (data) => {
    console.log('sent', data);

    return {
        type:    DayTypes.SET_CHOSEN_DAYS,
        payload: data,
    };
};

export const setFilter = (data) => {
    return {
        type:    DayTypes.SET_FILTER,
        payload: data,
    };
};

export const setFilterLabel = (data) => {
    return {
        type:    DayTypes.SET_FILTER_LABEL,
        payload: data,
    };
};
