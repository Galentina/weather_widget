import React, { useEffect } from 'react';
import { format } from  'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useDays } from '../../hooks/useDays';
import { setChosenDays, setDays } from '../../lib/redux/actions';
import { getChosenDays } from '../../lib/redux/selector';


const CurrentWeek = () => {
    const { data: days, isFetched } = useDays();
    const dispatch = useDispatch();
    const chosenDays = useSelector(getChosenDays);


    useEffect(() => {
        if (Array.isArray(days)) {
            dispatch(setChosenDays(days));
            dispatch(setDays(days[ 0 ].id));
        }
    },  []);

    const handleDayClick = (id) => {
        dispatch(setDays(id));
    };
    let newDaysOfWeek = [];
    if (chosenDays.length !== 0) {
        newDaysOfWeek = chosenDays.slice(0, 7).map((el) => {
            // eslint-disable-next-line no-nested-ternary
            const typeOfDay = el.type === 'sunny' ? 'day sunny' : el.type === 'rainy' ? 'day rainy' : 'day cloudy';

            return (
                <div
                    key = { el.id } className = { typeOfDay }
                    onClick = { () => handleDayClick(el.id) }>
                    <p>
                        { format(el.day, 'EEEE') }
                    </p>
                    <p>
                        <span>
                            { el.temperature }
                        </span>
                    </p>
                </div>
            );
        });
    }
    const daysOfWeek = isFetched && days?.slice(0, 7).map((el) => {
        // eslint-disable-next-line no-nested-ternary
        const typeOfDay = el.type === 'sunny' ? 'day sunny' : el.type === 'rainy' ? 'day rainy' : 'day cloudy';

        return (
            <div
                key = { el.id } className = { typeOfDay }
                onClick = { () => handleDayClick(el.id) }>
                <p>
                    { format(el.day, 'EEEE') }
                </p>
                <p>
                    <span>
                        { el.temperature }
                    </span>
                </p>

            </div>
        );
    });


    return (
        <div className = 'forecast'>
            { chosenDays.length !== 0
                ? newDaysOfWeek
                : daysOfWeek
            }
        </div>
    );
};

export default CurrentWeek;
