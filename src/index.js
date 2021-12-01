import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { App } from './app';


import './theme/index.scss';
import { store } from './lib/redux/init/store';


const queryClient = new QueryClient();

render(
    <Provider store = { store }>
        <QueryClientProvider client = { queryClient }>
            <App />
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root'),
);
