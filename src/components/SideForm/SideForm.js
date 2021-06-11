import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../lib/redux/actions';

export const SideForm = ({ data }) => {
    // const min = Math.min.apply(null, days?.map((el) => el.temperature));
    // const max = Math.max.apply(null, days?.map((el) => el.temperature));
    const [minTemp, setMinTemp] = useState('');
    const [maxTemp, setMaxTemp] = useState('');
    const [onFilter, setOnFilter] = useState(false);

    const {
        register, handleSubmit, setValue, watch, reset,
        formState: { isDirty },
    } = useForm();

    const dispatch = useDispatch();

    const valuesFilter = handleSubmit((values) => {
        const values1 = values;
        if (!values1.dayType) values1.dayType = '';
        console.log('value', values1);
        dispatch(setFilter(values1));
        setOnFilter(!onFilter);
        if (onFilter) {
            reset();
            dispatch(setFilter({ dayType: '', minT: '', maxT: '' }));
            setMinTemp(''); setMaxTemp('');
        }
    });
    register('dayType');
    const blockClass1 = !onFilter ? 'checkbox selected' : 'checkbox selected blocked';
    const blockClass2 = !onFilter ? 'checkbox' : 'checkbox blocked';

    return (
        <form
            className = 'filter' onSubmit = { valuesFilter }>
            <span
                className = { watch('dayType') === 'cloudy' ? blockClass1 : blockClass2 }
                onClick = { () => setValue('dayType', 'cloudy', { shouldDirty: true }) } > Cloudy  </span>
            <span
                className = { watch('dayType') === 'sunny' ? blockClass1 : blockClass2 }
                onClick = { () => setValue('dayType', 'sunny', { shouldDirty: true }) } > Sunny  </span>
            <p className = 'custom-input'>
                <label htmlFor = 'minT'> Minimum temperature</label>
                <input
                    readOnly = { onFilter }
                    id = 'minT' type = 'number'
                    value = { minTemp }
                    { ...register('minT') }
                    onChange = { (event) => setMinTemp(event.target.value) }
                    onClick = { () => setValue('minT', minTemp, { shouldDirty: true }) } />
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'maxT'> Maximum temperature</label>
                <input
                    readOnly = { onFilter }
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

