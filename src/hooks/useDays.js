import { useQuery } from 'react-query';
import { api } from '../api/api';

export const useDays = () => {
    return useQuery('forecast', api.getWeather);
};

