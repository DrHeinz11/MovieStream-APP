import { Heading, HStack, Image, Stack } from '@chakra-ui/react';

const Home = () => {
	return (
		<Stack
			w='full'
			px='10'
			py='8'
			gap='4'
			minH='100vh'
			borderInlineEnd='1px solid #c1c1c1'
		>
			<HStack h='fit-content' gap='4'>
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
				<Heading
					_hover={{ color: '#ccc' }}
					cursor='pointer'
					fontFamily={'body'}
					fontSize='lg'
					fontWeight='semibold'
				>
					Recent
				</Heading>
			</HStack>
			<Image
				w='full'
				h='xs'
				objectFit={'cover'}
				objectPosition='0 -60px'
				src='https://images4.alphacoders.com/573/57394.jpg'
				alt='Background'
			/>
			<Heading>raro</Heading>
			<Heading>todo</Heading>
			<Heading>muy raro</Heading>
		</Stack>
	);
};

export default Home;
