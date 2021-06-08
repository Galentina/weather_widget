import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../api';
import { setChosenDays, setDays } from '../lib/redux/actions/DayAction';
import { getFilter, getFilterLabel } from '../lib/redux/selector';

export const useDays = () => {
    const query = useQuery('data', api.getWeather);
    const filterLabel = useSelector(getFilterLabel);
    const filterVal = useSelector(getFilter);
    const dispatch = useDispatch();
    useEffect(() => {
        if (Array.isArray(query.data)) {
            dispatch(setDays(query.data[ 0 ].id));
            let arr = query.data;
            if (!filterLabel) {
                if (filterVal[ 'minT' ]) arr = arr.filter((el) => el.temperature >= filterVal.minT);
                if (filterVal[ 'maxT' ]) arr = arr.filter((el) => el.temperature <= filterVal.maxT);
                if (filterVal[ 'dayType' ]) arr = arr.filter((el) => el.type <= filterVal.maxT);
            }

            dispatch(setChosenDays(arr));
        }
    },  []);

    return query;
};

