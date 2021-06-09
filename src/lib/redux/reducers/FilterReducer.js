import { FilterTypes } from '../types/FilterTypes';

const initialState1 = {
    filter:       false,
    filterValues: {
        dayType: '',
        mixT:    '',
        maxT:    '',
    },
};

export const FilterReducer = (state = initialState1, action) => {
    switch (action.type) {
    case FilterTypes.SET_FILTER: {
        console.log('Filter Value', action.payload);

        return {
            ...state,
            filterValues: action.payload,
        };
    }
    case FilterTypes.SET_FILTER_LABEL: {
        console.log('Filter', action.payload);

        return {
            ...state,
            filter: action.payload,
        };
    }
    default: return state;
    }
};
