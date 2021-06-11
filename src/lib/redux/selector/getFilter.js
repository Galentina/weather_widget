import { FilterReducer as filter } from '../reducers';

export const getFilter = (state) => {
    return state.filter.filterValues;
};

