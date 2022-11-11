import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const RecentFavorites = () => {
	const state = useSelector(store => store.seeLater);
	return (
		<Box w='full'>
			<div>RecentFavorites:</div>
			<Grid gridTemplateColumns='repeat(auto-fill,minmax(250px,1fr))' w='full'>
				{state?.map(element => (
					<Box key={element.id + element.name} border='1px solid black'>
						<Text>{element.name}</Text>
						<Heading>{element.id}</Heading>
					</Box>
				))}
			</Grid>
		</Box>
	);
};

export default RecentFavorites;
