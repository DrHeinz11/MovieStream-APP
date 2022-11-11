import { Button, Grid, Heading, HStack, Image, Spinner, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import Card from '../components/Card/Card';
import { useGetMoviesQuery } from '../services/API.services';
import Pagination from './Home/components/Pagination';

const Home = () => {
	const [albumQuery, setAlbumQuery] = useState(1);
	const { data, isLoading } = useGetMoviesQuery(albumQuery);

	return (
		<Stack
			as='section'
			w='full'
			maxW={'1000px'}
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
			<HStack>
				<Button
					size='lg'
					_disabled={albumQuery <= 0 && 'disable'}
					onClick={() => setAlbumQuery(prev => prev >= 0 && prev - 1)}
				>{`<PREV`}</Button>
				<Button
					size='lg'
					onClick={() => setAlbumQuery(prev => prev + 1)}
				>{`NEXT>`}</Button>
			</HStack>
			<Grid
				gridTemplateColumns='repeat(auto-fill,minmax(200px,1fr))'
				gap='2'
				w='full'
				alignItems='center'
			>
				{isLoading ? (
					<Spinner
					thickness='5px'
					speed='0.45s'
					emptyColor='gray.200'
					color='brand.main'
					size='xl'
				  />
				) : (
					data?.results.map(element => (
						<Card
							year={element.year}
							key={element._id}
							bgUrl={element.image}
							id={element._id}
							title={element.title}
							rating={element.rating}
						/>
					))
				)}
			</Grid>
			<Pagination setAlbumQuery={setAlbumQuery} albumQuery={albumQuery} />
		</Stack>
	);
};

export default Home;
