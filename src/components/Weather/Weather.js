import React from 'react';
import { format } from 'date-fns';

export const Weather = (props) => {
    const day = Date.now();


    const {
        main, wind, weather, sys,
    } = props;

    const sun = { ...sys };
    const temp = { ...main };
    const air = { ...weather };
    const winds = { ...wind };
    const icon = air[ 0 ]?.icon;

    // eslint-disable-next-line no-nested-ternary
    const iconShow = icon === '02d' || icon === '03d' || icon === '04d' || icon === '13d' || icon === '50d' ? 'cloudy'
        : icon === '09d' || icon === '10d' || icon === '11d' ? 'rainy' : 'sunny';

    const tempData = Math.floor(temp.temp - 273.15);

    if (!tempData) {
        return (
            <div className = 'forecast'>
                <p className = 'message'>Weather is coming!</p>
            </div>
        );
    }


    return (
        <div>
            <div className = 'head'>
                <img src = { `http://openweathermap.org/img/wn/${icon}@2x.png` } />
                <div className = 'current-date'>
                    <p>
                        { format(day, 'EEEE') }
                    </p>
                    <span>
                        { format(day, 'dd') } { format(day, 'LLLL') }
                    </span>
                </div>

            </div>
            <div className = 'current-weather'>
                <p className = 'temperature'>
                    { tempData }
                </p>
                <section className = 'meta-section'>
                    <p className = 'meta' >
                        <span className = 'rainy'>
                            { winds.speed } m/s
                        </span>
                        <span className = 'humidity' >
                            { temp.humidity } %
                        </span>
                    </p>
                    <p className = 'meta'>
                        <span className = 'sunrise'>
                            { format(sun.sunset, 'HH:mm') }
                        </span>
                        <span className = 'sunset'>
                            { format(sun.sunrise, 'HH:mm') }
                        </span>
                    </p>
                </section>
            </div>
        </div>
    );
};

