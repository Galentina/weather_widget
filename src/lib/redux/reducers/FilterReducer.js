import { FilterTypes } from '../types';

const initialState1 = {
    filterValues: {
        dayType: '',
        minT:    '',
        maxT:    '',
    },
};

export const FilterReducer = (state = initialState1, action) => {
    switch (action.type) {
    case FilterTypes.SET_FILTER: {
        return {
            ...state,
            filterValues: action.payload,
        };
    }
    default: return state;
    }
};
