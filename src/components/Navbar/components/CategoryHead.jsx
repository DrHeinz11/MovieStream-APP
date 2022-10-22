import { Heading, HStack } from '@chakra-ui/react';

const CategoryHead = () => {
	return (
		<HStack display={{ base: 'none', md: 'flex' }} h='fit-content' gap='4'>
			{' '}
			<Heading
				_hover={{ color: '#ccc' }}
				cursor='pointer'
				fontFamily={'body'}
				fontSize='lg'
				fontWeight='semibold'
			>
				Recent
			</Heading>
			<Heading
				_hover={{ color: '#ccc' }}
				cursor='pointer'
				fontFamily={'body'}
				fontSize='lg'
				fontWeight='semibold'
			>
				Series
			</Heading>
			<Heading
				_hover={{ color: '#ccc' }}
				cursor='pointer'
				fontFamily={'body'}
				fontSize='lg'
				fontWeight='semibold'
			>
				Peliculas
			</Heading>
		</HStack>
	);
};

export default CategoryHead;
