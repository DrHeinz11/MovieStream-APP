import Routes from './routes/Ruotes';
import { BrowserRouter } from 'react-router-dom';
import { Box, Divider, Grid } from '@chakra-ui/react';
import SideBar from './components/Sidebar/SideBar';
import Navbar from './components/Navbar/Navbar';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Divider />
				<Grid
					w='full'
					maxW='1350px'
					margin='0 auto'
					bg='#fff'
					minH='100vh'
					gridTemplateColumns={{ base: 'none', md: '.5fr 1.5fr .5fr' }}
				>
					<SideBar />
					<Routes />
					<Box display={{ base: 'none', md: 'flex' }} className=''></Box>
				</Grid>{' '}
			</BrowserRouter>
		</>
	);
}

export default App;
