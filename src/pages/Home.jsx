import { Grid, Heading, Image, Stack } from '@chakra-ui/react';

const Home = () => {
	return (
		<Stack
			as='section'
			w='full'
			px='10'
			py='8'
			gap='4'
			minH='100vh'
			borderInlineEnd='1px solid #c1c1c1'
		>
			<Image
				w='full'
				h='2xs'
				objectFit={'cover'}
				objectPosition='0 -100px'
				src='https://images4.alphacoders.com/573/57394.jpg'
				alt='Background'
			/>
			<Heading>raro</Heading>
			<Heading>todo</Heading>
			<Heading>muy raro</Heading>
			<Grid
				gridTemplateColumns='repeat(auto-fill,minmax(200px,1fr))'
				gap='2'
				w='full'
			></Grid>
		</Stack>
	);
};

export default Home;
