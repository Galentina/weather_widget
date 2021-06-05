import React from 'react';
import { useForm } from 'react-hook-form';

const SideForm = () => {
    const {
        register, handleSubmit, setValue, watch,
        formState: { isDirty },
    } = useForm();

    register('day-type');

    return (
        <form className = 'filter' onSubmit = { handleSubmit }>
            { /* <DayTypeCheckbox name=«Cloudy» /> */ }
            <span className = { watch('day-type') === 'Cloudy' ? 'checkbox selected' : 'checkbox' } onClick = { () => setValue('day-type', 'Cloudy', { shouldDirty: true }) } > Cloudy  </span>
            <span className = 'checkbox' onClick = { () => setValue('day-type', 'Sunny') } > Sunny  </span>
            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'> Min temperature</label>
                <input
                    id = 'min-temperature' type = 'number'
                    value readOnly />
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'max-temperature'> Max temperature</label>
                <input
                    id = 'max-temperature' type = 'number'
                    { ...register('max-temperature') } />
            </p>
            <button disabled = { !isDirty } > Filter </button>
        </form>
    );
};

export default SideForm;
