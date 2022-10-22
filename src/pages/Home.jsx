import { Grid, Heading, Image, Stack } from '@chakra-ui/react';
import Card from '../components/Card/Card';

const Home = () => {
	return (
		<Stack
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
			>
				<Card bgUrl='https://image.tmdb.org/t/p/w300/mWYW3xNeV2IM06aUl2xMUdLicpa.jpg' />
				<Card bgUrl='https://image.tmdb.org/t/p/w300/mWYW3xNeV2IM06aUl2xMUdLicpa.jpg' />
				<Card bgUrl='https://image.tmdb.org/t/p/w300/mWYW3xNeV2IM06aUl2xMUdLicpa.jpg' />
				<Card bgUrl='https://image.tmdb.org/t/p/w300/mWYW3xNeV2IM06aUl2xMUdLicpa.jpg' />
			</Grid>
		</Stack>
	);
};

export default Home;
