// Components
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import CurrentWeek from './components/Week/CurrentWeek';


import { SideForm, Weather } from './components';
import { useDays } from './hooks/useDays';
import { setDays } from './lib/redux/actions/DayAction';
import { api } from './api';

// Instruments
export const App = () => {
    const { data: days, isFetchedAfterMount, isFetched } = useDays();
    console.log(days);
    const dispatch = useDispatch();
    useEffect(() => {
        if (Array.isArray(days)) {
            dispatch(setDays(days?.[ 0 ].id));
            // dispatch(setChosenDays(query.data));
        }
    },  []);


    return (
        <main>
            <SideForm />
            <Weather />
            <CurrentWeek />
        </main>
    );
};

