import { Button, Grid, HStack, Stack } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useGetQueryByYearQuery } from '../../services/API.services';
import { Card, Loader } from '../../components';
import Pagination from '../Home/components/Pagination';
import SeriesCard from '../Series/components/SeriesCard';

const Discover = () => {
	const [albumQuery, setAlbumQuery] = useState(1);
	const [yearSelected, setYearSelected] = useState(2021);
	const [typeSelected, setTypeSelected] = useState('');
	const { data, isLoading } = useGetQueryByYearQuery({
		type: typeSelected,
		page: albumQuery,
		year: yearSelected,
	});

	const pagination = useMemo(
		() => (data?.total_pages >= 10 ? 10 : data?.total_pages),
		[data?.total_pages]
	);
	if (isLoading) return <Loader />;
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
			<HStack spacing='0' gap='4'>
				<Button
					colorScheme={'orange'}
					variant={yearSelected === 1998 ? 'solid' : 'outline'}
					onClick={() => setYearSelected(1998)}
				>
					1998
				</Button>
				<Button
					colorScheme={'orange'}
					variant={typeSelected === 'movies' ? 'solid' : 'outline'}
					onClick={() => setTypeSelected('movies')}
				>
					Movies
				</Button>
				<Button
					colorScheme={'orange'}
					variant={typeSelected === 'series' ? 'solid' : 'outline'}
					onClick={() => setTypeSelected('series')}
				>
					Series
				</Button>
			</HStack>

			<Stack>
				<Pagination
					amount={pagination}
					totalPages={data?.total_pages}
					colorScheme='orange'
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
					colorScheme='orange'
					setAlbumQuery={setAlbumQuery}
					albumQuery={albumQuery}
					scrollTo={{ position: 300, behavior: 'smooth' }}
				/>
			</Stack>
		</Stack>
	);
};

export default Discover;
