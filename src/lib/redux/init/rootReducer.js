// Core
import { combineReducers } from 'redux';

// Reducers
import { FilterReducer as filter } from '../reducers';


export const rootReducer = combineReducers({
    tmp: () => ({}),
    filter,
});
