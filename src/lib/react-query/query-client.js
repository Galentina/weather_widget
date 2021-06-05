/* Core */
import { QueryClient } from 'react-query';
import axios from 'axios';

const defaultQueryFn = async (options) => {
    const { queryKey } = options;

    let endpoint = queryKey?.[ 0 ];

    if (queryKey && queryKey?.length > 1) {
        for (const key of queryKey.slice(1)) {
            endpoint += `/${key}`;
        }
    }

    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/${endpoint}`,
    );

    return response.data;
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn:              defaultQueryFn,
            refetchOnWindowFocus: false,
        },
    },
});
