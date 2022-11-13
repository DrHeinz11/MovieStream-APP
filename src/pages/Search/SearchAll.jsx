import { Grid, Heading, Stack } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import { useGetMoviesByTitleQuery } from '../../services/API.services';
import Pagination from '../Home/components/Pagination';
import SeriesCard from '../Series/components/SeriesCard';

const SearchAll = () => {
	const { id } = useParams();
	const [albumQuery, setAlbumQuery] = useState(1);
	const { data, isLoading } = useGetMoviesByTitleQuery(id.split('-').join(' '));
	const pagination = useMemo(
		() => (data?.total_pages >= 10 ? 10 : data?.total_pages),
		[data?.total_pages]
	);
	if (data?.results.length < 1)
		return (
			<Grid as='section' w='full' maxW={'1000px'} minH='80vh'>
				<Heading>No se encuentran resultados...</Heading>
			</Grid>
		);
	return (
		<Stack
			as='section'
			w='full'
			maxW={'1000px'}
			px='10'
			py='8'
			gap='4'
			minH='100vh'
		>
			SearchAll
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
						scrollTo={{ position: 300, behavior: 'smooth' }}
					/>
					<Grid
						gridTemplateColumns='repeat(auto-fill,minmax(200px,1fr))'
						gap='2'
						w='full'
						alignItems='center'
					>
						{data?.results.map(element => {
							if (element.episodes.length > 0)
								return (
									<SeriesCard
										year={element.year}
										key={element._id}
										bgUrl={element.image}
										bgAlt={element.uuid}
										id={element._id}
										title={element.title}
										rating={element.rating}
										episodes={element.episodes}
									/>
								);
							return (
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
							);
						})}
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

export default SearchAll;
