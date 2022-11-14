import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SeriesEpisodes = ({ episodes, title }) => {
	const titleTransform = title.split(' ').join('-')
	return (
		<HStack
			flexWrap='wrap'
			spacing='0'
			gap='2'
			justifyContent={{ base: 'space-around', md: 'normal' }}
		>
			{episodes?.map(element => (
				<Link
					key={element._id}
					to={`/series/${titleTransform}/${element.uuid}/${element._id}`}
				>
					<Button size='md' colorScheme='pink' bg='brand.100'>
						Season {element.season} - Ep. {element.episode}
					</Button>
				</Link>
			))}
		</HStack>
	);
};

export default SeriesEpisodes;
