// Components
import CurrentWeek from './components/Week/CurrentWeek';


import { SideForm, Weather } from './components';
import { useDays } from './hooks';

// Instruments
export const App = () => {
    const { res, isFetched } = useDays();
    const yesDays = () => {
        return (
            <>
                <Weather data = { res } />
                <CurrentWeek data = { res } />
            </>
        );
    };

    const noDays = () => {
        return (
            <div className = 'forecast'>
                <p className = 'message'>Search criteria are no available days!</p>
            </div>
        );
    };

    return (
        <main>
            { isFetched
            && <>
                <SideForm data = { res } />
                { !res.length
                    ? noDays()
                    : yesDays()
                }
            </>
            }
        </main>
    );
};

