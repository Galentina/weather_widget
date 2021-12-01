import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../lib/redux/actions';

export const SideForm = () => {
    const [city, setCity] = useState('');
    const [onFilter, setOnFilter] = useState(false);

    const {
        register, handleSubmit, setValue, reset,
        formState: { isDirty },
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = handleSubmit((value) => {
        dispatch(setFilter(value));
        setOnFilter(!onFilter);
        if (onFilter) {
            reset();
            dispatch(setFilter({ city: 'London' }));
            setCity('');
        }
    });

    return (
        <form
            className = 'filter' onSubmit = { onSubmit }>
            <p className = 'custom-input'>
                <label htmlFor = 'city'> Change city</label>
                <input
                    readOnly = { onFilter }
                    id = 'city' type = 'text'
                    value = { city }
                    { ...register('city') }
                    onChange = { (event) => setCity(event.target.value) }
                    onClick = { () => setValue('city', city, { shouldDirty: true }) } />
            </p>
            <button disabled = { !isDirty } type = 'submit' > { !onFilter ? 'Submit' : 'Reset' } </button>
        </form>
    );
};

