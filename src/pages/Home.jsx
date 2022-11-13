import { Grid, Stack } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import Card from '../components/Card/Card';
import Loader from '../components/Loader/Loader';
import { useGetMoviesQuery } from '../services/API.services';
import Pagination from './Home/components/Pagination';

const Home = () => {
	const [albumQuery, setAlbumQuery] = useState(1);
	const { data, isLoading } = useGetMoviesQuery(albumQuery);
	const pagination = useMemo(
		() => (data?.total_pages >= 10 ? 10 : data?.total_pages),
		[data?.total_pages]
	);
	return (
		<Stack
			as='section'
			w='full'
			maxW={'1000px'}
			px={{ base: 4, md: 10 }}
			py='8'
			gap='4'
			minH='100vh'
			borderInlineEnd='1px solid #c1c1c1'
		>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Pagination
						amount={pagination}
						totalPages={data?.total_pages}
						colorScheme='red'
						setAlbumQuery={setAlbumQuery}
						albumQuery={albumQuery}
						scrollTo={{ position: 200, behavior: 'smooth' }}
					/>
					<Grid
						gridTemplateColumns='repeat(auto-fill,minmax(200px,1fr))'
						gap='2'
						w='full'
						alignItems='center'
					>
						{data?.results.map(
							element =>
								element.rating !== 'N/A/10' && (
									<Card
										year={element.year}
										key={element._id}
										bgUrl={element.image}
										id={element._id}
										title={element.title}
										rating={element.rating}
									/>
								)
						)}
					</Grid>
					<Pagination
						amount={pagination}
						totalPages={data?.total_pages}
						colorScheme='red'
						setAlbumQuery={setAlbumQuery}
						albumQuery={albumQuery}
						scrollTo={{ position: 300, behavior: 'smooth' }}
					/>
				</>
			)}
		</Stack>
	);
};

export default Home;
