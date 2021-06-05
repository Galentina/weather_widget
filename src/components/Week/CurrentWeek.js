import React from 'react';
import { format } from  'date-fns';
import { useDays } from '../../hooks/useDays';

const CurrentWeek = () => {
    // const week = [0, 1, 2, 3, 4, 5, 6];
    const { data, isFetched } = useDays();

    return (
        <div className = 'forecast'>
            {
                isFetched && data?.map((day) => <div key = { day.id } className = 'day sunny'> { format(day.day, 'EEEE') }</div>)
            }
        </div>
    );
};

export default CurrentWeek;
