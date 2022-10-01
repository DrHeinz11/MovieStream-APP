import './App.css';
import { Text, Heading, Box } from '@chakra-ui/react';
import Routes from './routes/Ruotes';
import { BrowserRouter } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<Box w='md' bg='brand.bg' p={4}>
				<Heading color='brand.main'>Lorem Ipsum</Heading>
				<Text color='brand.text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat
					nam debitis animi libero sed quisquam, doloribus quae exercitationem
					nesciunt sapiente natus! Odit architecto enim neque ad. Repellendus,
					culpa natus.
				</Text>
			</Box>
				<Routes />
			<div>esto es una prueba</div>
		</BrowserRouter>
	);
}

export default App;
