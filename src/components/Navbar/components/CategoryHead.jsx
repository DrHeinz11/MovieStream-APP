import { Heading, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CategoryHead = () => {
	return (
		<HStack display={{ base: 'none', md: 'flex' }} h='fit-content' gap='4'>
			{' '}
			<Link to='/see-later/'>
				<Heading
					as='span'
					_hover={{ color: '#ccc', borderBottom: '1px solid #e71c61' }}
					cursor='pointer'
					fontFamily={'body'}
					fontSize='lg'
					fontWeight='semibold'
					borderBottom='1px solid transparent'
				>
					Recent
				</Heading>
			</Link>
			<Link to='/series/all'>
				<Heading
					as='span'
					_hover={{ color: '#ccc', borderBottom: '1px solid #e71c61' }}
					cursor='pointer'
					fontFamily={'body'}
					fontSize='lg'
					fontWeight='semibold'
					borderBottom='1px solid transparent'
				>
					Series
				</Heading>
			</Link>
			<Link to='/movie/all'>
				<Heading
					as='span'
					_hover={{ color: '#ccc', borderBottom: '1px solid #e71c61' }}
					cursor='pointer'
					fontFamily={'body'}
					fontSize='lg'
					fontWeight='semibold'
					borderBottom='1px solid transparent'
				>
					Peliculas
				</Heading>
			</Link>
		</HStack>
	);
};

export default CategoryHead;
