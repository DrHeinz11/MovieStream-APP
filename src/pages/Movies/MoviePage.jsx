import { Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { useGetMoviesByIdQuery } from '../../services/API.services';
import MovieDescriptionCard from './components/MovieDescriptionCard';
import MoviePlayer from './components/MoviePlayer';

const MoviePage = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetMoviesByIdQuery(id);

	if (isLoading) return <Loader />;
	return (
		<Stack spacing='0' gap='4' py='10' bg={'#fafafa'} w='full'>
			<MovieDescriptionCard props={data?.result} />
			<MoviePlayer
				bgUrl={data?.result.image}
				embedUrls={data?.result.embedUrls}
			/>
		</Stack>
	);
};

export default MoviePage;
