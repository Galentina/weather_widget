import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../api';
import { setDays } from '../lib/redux/actions';
import { getFilter } from '../lib/redux/selector';

export const useDays = () => {
    const query = useQuery('data', api.getWeather);
    const filterVal = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        if (Array.isArray(query?.data)) {
            dispatch(setDays(query?.data[ 0 ].id));
        }
    },  []);

    let res = query?.data;

    const { isFetched } = query;
    console.log(res?.length, query.data);

    if (filterVal.dayType) {
        res = res.filter((el) => el.type === filterVal.dayType);
    }
    if (filterVal.minT !== '' && res?.length) {
        res = res.filter((el) => el.temperature >= Number(filterVal.minT));
    }
    if (filterVal.maxT !== '' && res?.length) {
        res = res.filter((el) => el.temperature <= Number(filterVal.maxT));
    }
    if (res?.length) dispatch(setDays(res?.[ 0 ].id));
    else dispatch(setDays(''));

    return { res, isFetched };
    // noDays
};

