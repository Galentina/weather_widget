import React from 'react';

const Weather = () => {
    return (
        <div className = 'current-weather'>
            <p className = 'temperature'>20</p>
            <p className = 'meta'>
                <span className = 'rainy'>% 90</span>
                <span className = 'humidity'>% 75</span>
            </p>
        </div>
    );
};

export default Weather;
