import { Grid, Heading, Stack, chakra, HStack } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { BsCollectionPlayFill } from 'react-icons/bs';
import Loader from '../../components/Loader/Loader';
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
		<Stack spacing='0' gap='4' w='full' px='2' py='4'>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<HStack spacing='0' gap='4'>
						<BsCollectionPlayFill />
						<Heading display='flex' direction='row' alignItems='center' gap='2'>
							Popular <chakra.span color='green'>Series</chakra.span>
						</Heading>
					</HStack>
					<Grid
						w='full'
						gap='4'
						justifyContent={{ base: 'center', md: 'flex-start' }}
						gridTemplateColumns={{
							base: 'repeat(auto-fill,minmax(250px,350px))',
							sm: 'repeat(auto-fill,minmax(220px,1fr))',
							'2xl': 'repeat(auto-fill,minmax(300px,1fr))',
						}}
					>
						{data?.results.map(element => (
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
						))}
					</Grid>
					<Pagination
						amount={pagination}
						colorScheme='green'
						totalPages={data?.total_pages}
						setAlbumQuery={setAlbumQuery}
						albumQuery={albumQuery}
						scrollTo={{ position: 0, behavior: 'smooth' }}
					/>
				</>
			)}
		</Stack>
	);
};

export default SeriesAll;
