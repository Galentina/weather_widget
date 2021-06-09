// Components
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CurrentWeek from './components/Week/CurrentWeek';


import { SideForm, Weather } from './components';
import { useDays } from './hooks/useDays';
import { setDays } from './lib/redux/actions/DayAction';

// Instruments
export const App = () => {
    const { data: days } = useDays();

    const dispatch = useDispatch();
    useEffect(() => {
        if (Array.isArray(days)) {
            dispatch(setDays(days?.[ 0 ].id));
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

