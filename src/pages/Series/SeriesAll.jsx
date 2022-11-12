import { Grid, Spinner, Stack } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useGetSeriesAllQuery } from '../../services/API.services';
import Pagination from '../Home/components/Pagination';
import SeriesCard from './components/SeriesCard';

const SeriesAll = () => {
	const [albumQuery, setAlbumQuery] = useState(1);
	const { data, isLoading } = useGetSeriesAllQuery(albumQuery);
	const pagination = useMemo(
		() => (data?.total_pages >= 10 ? 10 : data?.total_pages),
		[data?.total_pages]
	);
	return (
		<Stack spacing='0' gap='4' w='full' px='2'>
			<Grid
				w='full'
				gap='4'
				justifyContent={'center'}
				gridTemplateColumns='repeat(auto-fill,minmax(250px,300px))'
			>
				{isLoading ? (
					<Spinner
						thickness='5px'
						speed='0.45s'
						emptyColor='gray.200'
						color='brand.100'
						size='xl'
					/>
				) : (
					data?.results.map(element => (
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
					))
				)}
			</Grid>
			<Pagination
				amount={pagination}
				colorScheme='green'
				setAlbumQuery={setAlbumQuery}
				albumQuery={albumQuery}
				scrollTo={{ position: 0, behavior: 'smooth' }}
			/>
		</Stack>
	);
};

export default SeriesAll;
