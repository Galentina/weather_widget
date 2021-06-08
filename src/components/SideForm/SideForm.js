import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setChosenDays, setFilter, setFilterLabel } from '../../lib/redux/actions/DayAction';
import { useDays } from '../../hooks/useDays';
import { getFilter, getFilterLabel } from '../../lib/redux/selector';

export const SideForm = () => {
    const { data: days, isFetched } = useDays();
    // const min = Math.min.apply(null, days?.map((el) => el.temperature));
    // const max = Math.max.apply(null, days?.map((el) => el.temperature));
    // console.log('min', min, 'max', max);
    const onFilter = useSelector(getFilterLabel);
    const filterVal = useSelector(getFilter);
    console.log(onFilter);
    const [weather, setWeather] = useState('');
    const [minTemp, setMinTemp] = useState('');
    const [maxTemp, setMaxTemp] = useState('');

    const {
        register, handleSubmit, setValue, watch, reset,
        formState: { isDirty },
    } = useForm();

    const dispatch = useDispatch();


    const valuesFilter = handleSubmit((values) => {
        dispatch(setFilter(values));

        dispatch(setFilterLabel(!onFilter));
        console.log('Yes', values);
        if (onFilter) {
            reset(); setMinTemp(''); setMaxTemp('');
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
                    { ...register('mixT') }
                    onChange = { (event) => setMinTemp(event.target.value) }
                    onClick = { () => setValue('mixT', minTemp, { shouldDirty: true }) } />
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

