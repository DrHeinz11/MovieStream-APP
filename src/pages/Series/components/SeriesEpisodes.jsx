import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SeriesEpisodes = ({ episodes }) => {
	return (
		<HStack
			flexWrap='wrap'
			spacing='0'
			gap='2'
			justifyContent={{ base: 'space-around', md: 'normal' }}
		>
			{episodes?.map(element => (
				<>
					<Link
						key={element._id}
						to={`/series/${element._id}/episode-${element.episode}`}
					>
						<Button size='md' colorScheme='orange' bg='brand.100'>
							Season {element.season} - Ep. {element.episode}
						</Button>
					</Link>
				</>
			))}
		</HStack>
	);
};

export default SeriesEpisodes;
