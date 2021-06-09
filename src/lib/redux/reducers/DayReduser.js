import { DayTypes } from '../types';

const initialState = {
    days:       '',
    chosenDays: [],
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
    default: return state;
    }
};
