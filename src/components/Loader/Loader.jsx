import { Grid, Spinner } from '@chakra-ui/react';

const Loader = () => {
	return (
		<Grid placeItems={'center'} w='full' h='80vh'>
			<Spinner
				thickness='5px'
				speed='0.45s'
				emptyColor='gray.200'
				color='brand.100'
				size='xl'
			/>
		</Grid>
	);
};

export default Loader;
