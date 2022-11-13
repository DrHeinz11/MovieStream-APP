import Routes from './routes/Ruotes';
import { BrowserRouter } from 'react-router-dom';
import { Divider, HStack, Stack } from '@chakra-ui/react';
import SideBar from './components/Sidebar/SideBar';
import Navbar from './components/Navbar/Navbar';
import { SideBarProvider } from './components/Sidebar/context/context';
function App() {
	return (
		<>
			<BrowserRouter>
				<Stack>
					<SideBarProvider>
						<Navbar />
						<HStack alignItems='flex-start' spacing={'none'}>
							<SideBar display={{ base: 'none', md: 'flex' }} />
							<Routes />
						</HStack>
					</SideBarProvider>
				</Stack>
				<Divider />
			</BrowserRouter>
		</>
	);
}

export default App;
