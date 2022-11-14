import { Heading, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components';
import { useGetSeriesByIdQuery } from '../../services/API.services';
import MoviePlayer from '../Movies/components/MoviePlayer';

const SeriesPlayer = () => {
	const { id, route, ep } = useParams();
	const { data, isLoading } = useGetSeriesByIdQuery(id);

	if (isLoading) return <Loader />;

	return (
		<Stack spacing='0' py='4' gap='4' w='full' textAlign='center'>
			<Heading textTransform='capitalize'>{route}</Heading>
			<Heading textTransform='capitalize' fontSize='lg'>
				{ep.split('-').join(' ')}
			</Heading>
			<MoviePlayer embedUrls={data?.result?.embedUrls} />
		</Stack>
	);
};

export default SeriesPlayer;
