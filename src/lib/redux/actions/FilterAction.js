import { FilterTypes } from '../types';

export const setFilter = (data) => {
    return {
        type:    FilterTypes.SET_FILTER,
        payload: data,
    };
};
