import React from 'react';
import { format } from  'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { setDays, setFilter } from '../../lib/redux/actions';
import { getDay } from '../../lib/redux/selector';


const CurrentWeek = ({ data }) => {
    const dispatch = useDispatch();
    const selectedDayId = useSelector(getDay);

    const handleDayClick = (id) => {
        dispatch(setDays(id));
    };

    if (!data?.length) dispatch(setFilter({ dayType: '', minT: '', maxT: '' }));

    const daysOfWeek = data.slice(0, 7).map((el) => {
        const typeSelectedDay = selectedDayId || data[ 0 ].id;

        return (
            <div
                key = { el.id } className = { el.id === typeSelectedDay ? `day ${el.type} selected` : `day ${el.type}` }
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
            {
                daysOfWeek
            }
        </div>
    );
};

export default CurrentWeek;
