import { FilterTypes } from '../types';

const initialState = {
    filterValues: {
        city: 'London',
    },
};

export const FilterReducer = (state = initialState, action) => {
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
