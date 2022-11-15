import {
	Badge,
	Button,
	Grid,
	Heading,
	HStack,
	Image,
	Stack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RecentViews = () => {
	const state = useSelector(store => store.recents);
	return (
		<Stack spacing='0' w='full' px='4' py='10'>
			<Heading>Recent Views</Heading>
			<Grid
				gridTemplateColumns='repeat(auto-fill,minmax(250px,1fr))'
				gap='4'
				w='full'
			>
				{state?.map(
					element =>
						element.id && (
							<Stack
								key={element.id + element.name}
								borderRadius='md'
								spacing='0'
								p='4'
								gap='4'
								alignItems={'center'}
								bg='white'
								boxShadow='md'
								_hover={{ transform: 'scale(1.025)' }}
							>
								<Image src={element.bgUrl} alt={`background-${name}`} />
								<HStack>
									<Heading fontSize='2xl' textTransform='capitalize'>
										{element.name}
									</Heading>
									{element.type && (
										<Badge colorScheme={'green'}>{element.type}</Badge>
									)}
								</HStack>
								<Link
									to={
										!element.type
											? `/movie/${element.id}`
											: `/series/${element.id}`
									}
								>
									<Button bg='brand.100' colorScheme={'red'}>
										Ver ahora
									</Button>
								</Link>
							</Stack>
						)
				)}
			</Grid>
		</Stack>
	);
};

export default RecentViews;
