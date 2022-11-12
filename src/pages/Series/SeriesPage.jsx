import { Heading, Text, Box, ButtonGroup, Button } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
const SeriesPage = () => {
	const { id } = useParams();
	return (
		<>
			<Box w='full' bg='base.bg' p={4}>
				<Heading color='brand.100'>SeriesPage</Heading>
				<Heading color='base.sub' textTransform={'uppercase'}>
					{id}
				</Heading>
				<Text color='base.text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat
					nam debitis animi libero sed quisquam, doloribus quae exercitationem
					nesciunt sapiente natus! Odit architecto enim neque ad. Repellendus,
					culpa natus.
				</Text>
				<ButtonGroup flexWrap={'wrap'} gap='2' spacing='none'>
					<Link to='/search/123456'>
						<Button size='md' colorScheme={'purple'}>
							Search
						</Button>
					</Link>
					<Link to='/recent/favorites'>
						<Button size='md' colorScheme={'purple'}>
							Favorites
						</Button>
					</Link>
					<Link to='/movie/all'>
						<Button size='md' colorScheme={'purple'}>
							Movies
						</Button>
					</Link>
					<Link to='/series/heading'>
						<Button size='md' colorScheme={'purple'}>
							Series
						</Button>
					</Link>
				</ButtonGroup>
			</Box>
		</>
	);
};

export default SeriesPage;
