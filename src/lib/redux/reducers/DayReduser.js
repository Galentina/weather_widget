import { DayTypes } from '../types';

const initialState = {
    days:         '',
    chosenDays:   [],
    filter:       false,
    filterValues: {
        dayType: '',
        mixT:    '',
        maxT:    '',
    },
};

export const DayReducer = (state = initialState, action) => {
    switch (action.type) {
    case DayTypes.SET_DAYS: {
        return {
            ...state,
            days: action.payload,
        };
    }
    case DayTypes.SET_CHOSEN_DAYS: {
        console.log('chosen', action.payload);

        return {
            ...state,
            chosenDays: action.payload,
        };
    }
    case DayTypes.SET_FILTER: {
        console.log('Filter Value', action.payload);

        return {
            ...state,
            filterValues: action.payload,
        };
    }
    case DayTypes.SET_FILTER_LABEL: {
        console.log('Filter', action.payload);

        return {
            ...state,
            filter: action.payload,
        };
    }
    default: return state;
    }
};
