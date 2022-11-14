import { Button, HStack } from '@chakra-ui/react';
import Loader from '../../../components/Loader/Loader';
import { useGetGenreQuery } from '../../../services/API.services';

const MovieGenre = ({ setFilter }) => {
	const { data, isLoading } = useGetGenreQuery();
	if (isLoading) return <Loader />;
	return (
		<HStack spacing='0' gap='3'>
			{data?.results.map(element => (
				<Button
					onClick={() => setFilter(prev => element)}
					key={element.uuid}
					colorScheme='red'
					bg='brand.100'
				>
					{element.name}
				</Button>
			))}
		</HStack>
	);
};

export default MovieGenre;
