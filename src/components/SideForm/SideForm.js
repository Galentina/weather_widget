import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    setChosenDays, setDays, setFilter, setFilterLabel,
} from '../../lib/redux/actions';
import { useDays } from '../../hooks/useDays';
import { getFilterLabel } from '../../lib/redux/selector';

export const SideForm = () => {
    const { data: days } = useDays();
    const min = Math.min.apply(null, days?.map((el) => el.temperature));
    const max = Math.max.apply(null, days?.map((el) => el.temperature));
    const onFilter = useSelector(getFilterLabel);
    const [minTemp, setMinTemp] = useState('');
    const [maxTemp, setMaxTemp] = useState('');

    const {
        register, handleSubmit, setValue, watch, reset,
        formState: { isDirty },
    } = useForm();

    const dispatch = useDispatch();

    const choice = (values) => {
        // eslint-disable-next-line max-len
        const chosenDaysWeek = values.dayType ? days?.filter((el) => el.type === values.dayType) : days;
        const arr = [];
        const min1 = values.minT !== '' ? Number(values.minT) : min;
        const max1 = values.maxT !== '' ? Number(values.maxT) : max;
        for (let i = 0; i < chosenDaysWeek.length; i++) {
            // eslint-disable-next-line max-len
            if (chosenDaysWeek[ i ].temperature >= min1 && chosenDaysWeek[ i ].temperature <= max1) arr.push(chosenDaysWeek[ i ]);
        }
        dispatch(setChosenDays(arr));
        dispatch(setDays(arr[ 0 ].id));
        // eslint-disable-next-line no-alert
        if (arr.length === 0 && !onFilter)  alert('There is no result for your choice');

        return arr;
    };

    const valuesFilter = handleSubmit((values) => {
        dispatch(setFilter(values));
        choice(values);
        dispatch(setFilterLabel(!onFilter));
        if (onFilter) {
            reset();
            dispatch(setChosenDays([]));
            dispatch(setDays(days[ 0 ].id));
            dispatch(setFilter({ dayType: '', mixT: '', maxT: '' }));
            setMinTemp(''); setMaxTemp('');
        }
    });
    register('dayType');


    return (
        <form className = 'filter' onSubmit = { valuesFilter }>
            <span
                className = { watch('dayType') === 'cloudy' ? 'checkbox selected' : 'checkbox' }
                onClick = { () => setValue('dayType', 'cloudy', { shouldDirty: true }) }> Cloudy  </span>
            <span
                className = { watch('dayType') === 'sunny' ? 'checkbox selected' : 'checkbox' }
                onClick = { () => setValue('dayType', 'sunny', { shouldDirty: true }) } > Sunny  </span>
            <p className = 'custom-input'>
                <label htmlFor = 'minT'> Minimum temperature</label>
                <input
                    id = 'minT' type = 'number'
                    value = { minTemp }
                    { ...register('minT') }
                    onChange = { (event) => setMinTemp(event.target.value) }
                    onClick = { () => setValue('minT', minTemp, { shouldDirty: true }) } />
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'maxT'> Maximum temperature</label>
                <input
                    id = 'maxT' type = 'number'
                    value = { maxTemp }
                    { ...register('maxT') }
                    onChange = { (event) => setMaxTemp(event.target.value) }
                    onClick = { () => setValue('maxT', maxTemp, { shouldDirty: true }) } />
            </p>
            <button disabled = { !isDirty } type = 'submit' > { !onFilter ? 'Filter' : 'Reset' } </button>
        </form>
    );
};

