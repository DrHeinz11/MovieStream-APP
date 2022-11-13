import { useParams } from 'react-router-dom';
import { useGetByGenreQuery } from '../../services/API.services';
import Bg from '../../assets/39039.webp';
import { Grid, Image, Stack } from '@chakra-ui/react';
import Loader from '../../components/Loader/Loader';
import Pagination from '../Home/components/Pagination';
import SeriesCard from '../Series/components/SeriesCard';
import Card from '../../components/Card/Card';
import { useMemo, useState } from 'react';
const GenrePage = () => {
	const { id } = useParams();
	const [albumQuery, setAlbumQuery] = useState(1);
	const { data, isLoading } = useGetByGenreQuery(albumQuery);
	const pagination = useMemo(
		() => (data?.total_pages >= 10 ? 10 : data?.total_pages),
		[data?.total_pages]
	);

	return (
		<Stack w='full'>
			<Image
				src={Bg}
				alt='anime-background'
				maxH='35vh'
				w='full'
				objectFit={'cover'}
			/>
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
							colorScheme='blue'
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
		</Stack>
	);
};

export default GenrePage;
