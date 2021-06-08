import React, { useEffect } from 'react';
import { format } from  'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useDays } from '../../hooks/useDays';
import { setChosenDays, setDays } from '../../lib/redux/actions/DayAction';
import { getChosenDays, getFilter, getFilterLabel } from '../../lib/redux/selector';


const CurrentWeek = () => {
    const { data: days, isFetched } = useDays();
    const dispatch = useDispatch();
    // const chosenDays = useSelector(getChosenDays);
    const onFilter = useSelector(getFilterLabel);
    const filterVal = useSelector(getFilter);

    useEffect(() => {
        if (Array.isArray(days)) {
            dispatch(setChosenDays(days));
            dispatch(setDays(days[ 0 ].id));
        }
    },  []);

    const handleDayClick = (id) => {
        dispatch(setDays(id));
    };


    const daysOfWeek = isFetched && days?.slice(0, 7).map((el) => {
        // eslint-disable-next-line no-nested-ternary
        const typeOfDay = el.type === 'sunny' ? 'day sunny' : el.type === 'rainy' ? 'day rainy' : 'day cloudy';

        return (
            <div
                key = { el.id } className = { typeOfDay }
                onClick = { () => handleDayClick(el.id) }> { format(el.day, 'EEEE') }
            </div>
        );
    });

    console.log('filterVal', filterVal);
    const chosenDaysWeek = filterVal.dayType && days?.filter((el) => el.type === filterVal.dayType);
    console.log('Yes', chosenDaysWeek);

    return (
        <div className = 'forecast'>
            {
                daysOfWeek
            }
        </div>
    );
};

export default CurrentWeek;
