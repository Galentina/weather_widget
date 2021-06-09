import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { useDays } from '../../hooks/useDays';
import { getDay } from '../../lib/redux/selector';


export const Weather = () => {
    const { data: days, isFetched } = useDays();
    const selectedDayId = useSelector(getDay);

    const chosenDay =  !selectedDayId  ? days?.find((el, i) => i === 0)
        : days?.find((el) => el.id === selectedDayId);

    if (!isFetched && !selectedDayId) {
        return 'Загрузка...';
    }


    return (
        <div>
            <div className = 'head'>
                <div className = { `icon ${chosenDay.type}` } />
                <div className = 'current-date'>
                    <p>
                        { format(chosenDay.day, 'EEEE') }
                    </p>
                    <span>
                        { format(chosenDay.day, 'dd') } { format(chosenDay.day, 'LLLL') }
                    </span>
                </div>

            </div>
            <div className = 'current-weather'>
                <p className = 'temperature'>
                    { chosenDay.temperature }
                </p>
                <p className = 'meta'>
                    <span className = 'rainy'>
                        { chosenDay.rain_probability }
                    </span>
                    <span className = 'humidity'>
                        { chosenDay.humidity }
                    </span>
                </p>
            </div>
        </div>
    );
};

