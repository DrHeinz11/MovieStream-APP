import { Heading} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useGetMoviesByIdQuery } from '../../services/API.services';
import MovieDescriptionCard from './components/MovieDescriptionCard';

const MoviePage = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetMoviesByIdQuery(id);

	if (isLoading) return <Heading>Is loading...</Heading>;
	return <MovieDescriptionCard props={data?.result} />;
};

export default MoviePage;
