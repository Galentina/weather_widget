// Components
import CurrentWeek from './components/Week/CurrentWeek';
import Header from './components/Head/Head';
import Weather from './components/Weather/Weather';
import SideForm from './components/FilterForm/SideForm';

// Instruments
export const App = () => {
    return (
        <main>
            <SideForm />
            <Header />
            <Weather />
            <CurrentWeek />
        </main>
    );
};

