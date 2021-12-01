import { SideForm, Weather } from './components';
import { useDays } from './hooks';

export const App = () => {
    const { res, isFetched } = useDays();

    const allData = { ...res };
    const sys = { ...res?.sys };

    const noData = () => {
        return (
            <div className = 'forecast'>
                <p className = 'message'>Something is going wrong!</p>
                <p className = 'message'>Please write the real name of city.</p>
            </div>
        );
    };

    return (
        <main>
            { !allData
                ? noData
                : <>
                    <div className = 'city'>{ allData.name } { ' ' } { sys?.country }</div>
                    <div>
                        <SideForm />
                    </div>
                    { isFetched
                        && <>
                            <Weather
                                main = { allData.main } wind = { allData.wind }
                                weather = { allData.weather } name = { allData.name }
                                sys = { allData.sys } />

                        </>
                    }
                </>
            }
        </main>
    );
};

