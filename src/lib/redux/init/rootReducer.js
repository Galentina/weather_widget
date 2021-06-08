// Core
import { combineReducers } from 'redux';

// Reducers
import { DayReducer as days } from '../reducers';


export const rootReducer = combineReducers({
    tmp: () => ({}),
    days,
});
