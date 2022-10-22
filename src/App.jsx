import Routes from './routes/Ruotes';
import { BrowserRouter } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';
import SideBar from './components/Sidebar/SideBar';
function App() {
	return (
		<>
			<BrowserRouter>
				<Grid
					w='full'
					bg='#fff'
					minH='100vh'
					gridTemplateColumns={'.75fr 2.5fr .75fr'}
				>
					<SideBar />
					<Routes />
				</Grid>{' '}
			</BrowserRouter>
		</>
	);
}

export default App;
