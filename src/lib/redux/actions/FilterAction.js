import { FilterTypes } from '../types/FilterTypes';

export const setFilter = (data) => {
    return {
        type:    FilterTypes.SET_FILTER,
        payload: data,
    };
};

export const setFilterLabel = (data) => {
    return {
        type:    FilterTypes.SET_FILTER_LABEL,
        payload: data,
    };
};
