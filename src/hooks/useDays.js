import { useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { api } from '../api';
import { getCity } from '../lib/redux/selector';
import { setFilter } from '../lib/redux/actions';

export const useDays = () => {
    const dispatch = useDispatch();
    const state = useSelector(getCity);
    const client = useQueryClient();
    const query = useQuery(['data', state.city],
        async () => {
            const data = await api.getWeather(state.city);

            return data;
        },
        {
            placeholderData() {
                const dataPreview = client
                    .getQueryData('data')
                    ?.find((data) => data.state.city === state.city);

                return (
                    dataPreview ?? {
                        title: 'getting data',
                        body:  '...weather is coming',
                    }
                );
            },
            onError() {
                dispatch(setFilter({ city: 'London' }));
                // eslint-disable-next-line no-alert
                alert('The name of the city is wrong! Please write the real name of the city');
            },
            retry:      2,
            retryDelay: 1500,
        });
    const { isLoading, isFetched } = query;

    const res = query?.data.data;


    return { res, isLoading, isFetched };
};

