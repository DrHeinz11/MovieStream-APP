import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={Store}>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</Provider>
);
