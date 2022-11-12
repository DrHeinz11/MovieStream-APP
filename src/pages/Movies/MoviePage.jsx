import { Heading, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useGetMoviesByIdQuery } from '../../services/API.services';
import MovieDescriptionCard from './components/MovieDescriptionCard';
import MoviePlayer from './components/MoviePlayer';

const MoviePage = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetMoviesByIdQuery(id);

	if (isLoading) return <Heading>Is loading...</Heading>;
	return (
		<Stack spacing='0' gap='4'>
			<MovieDescriptionCard props={data?.result} />
			<MoviePlayer embedUrls={data?.result.embedUrls} />
		</Stack>
	);
};

export default MoviePage;
