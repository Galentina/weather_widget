import { DayTypes } from '../types';

const initialState = {
    days: '',
};

export const DayReducer = (state = initialState, action) => {
    switch (action.type) {
    case DayTypes.SET_DAYS: {
        return {
            ...state,
            days: action.payload,
        };
    }
    default: return state;
    }
};
