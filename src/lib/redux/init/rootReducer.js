// Core
import { combineReducers } from 'redux';

// Reducers
import { DayReducer as days, FilterReducer as filter } from '../reducers';


export const rootReducer = combineReducers({
    tmp: () => ({}),
    days,
    filter,
});
