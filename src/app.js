// Components
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CurrentWeek from './components/Week/CurrentWeek';


import { SideForm, Weather } from './components';
import { useDays } from './hooks';
import { setDays } from './lib/redux/actions';

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

