import { Heading, HStack, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import Card from '../../components/Card/Card';
import CustomLink from '../../components/custom/CustomLink';
import Loader from '../../components/Loader/Loader';
import SliderContainer from '../../components/Slider/SliderContainer';
import { useGetByGenreSlidesQuery } from '../../services/API.services';
import MovieGenre from './components/MovieGenre';

const MovieAll = () => {
	const [filter, setFilter] = useState({
		name: 'Acción',
		uuid: 'accion',
	});
	const { data: action, isLoading } = useGetByGenreSlidesQuery('animacion');
	const { data: search, isLoading: isLoadingSearch } = useGetByGenreSlidesQuery(
		filter.uuid
	);

	if (isLoading) return <Loader />;
	return (
		<Stack overflowX='hidden' py='10' px='4' spacing='0' gap='4'>
			<Stack gap='4' spacing='0'>
				<HStack>
					<Heading>Categorias</Heading>
				</HStack>
				{!isLoadingSearch && (
					<SliderContainer>
						<MovieGenre setFilter={setFilter} />
					</SliderContainer>
				)}
			</Stack>

			{search?.results.length > 0 && (
				<Stack gap='4' spacing='0' w='full'>
					<HStack align='center' gap='4' spacing='0'>
						<Heading>{filter.name}</Heading>
						<CustomLink route={`/genre/${filter.uuid}`} />
					</HStack>
					<SliderContainer>
						{search?.results?.map(element => (
							<Card
								width='250px'
								year={element.year}
								key={element._id}
								bgUrl={element.image}
								id={element._id}
								title={element.title}
								rating={element.rating}
							/>
						))}
					</SliderContainer>
				</Stack>
			)}

			<Stack gap='4' spacing='0'>
				<HStack align='center' gap='4' spacing='0'>
					<Heading>Animacion</Heading>
					<CustomLink route={`/genre/animacion`} />
				</HStack>
				<SliderContainer>
					{action?.results?.map(element => (
						<Card
							width='250px'
							year={element.year}
							key={element._id}
							bgUrl={element.image}
							id={element._id}
							title={element.title}
							rating={element.rating}
						/>
					))}
				</SliderContainer>
				;
			</Stack>
		</Stack>
	);
};

export default MovieAll;
