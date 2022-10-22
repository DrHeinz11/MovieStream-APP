import { Button, Grid, Stack } from '@chakra-ui/react';
import { BsBookmarkPlus } from 'react-icons/bs';

const Card = ({ bgUrl }) => {
	return (
		<Stack
			position='relative'
			justifyContent={'end'}
			backgroundImage={`url(${bgUrl})`}
			height='xs'
			borderRadius='sm'
			backgroundSize={'cover'}
			backgroundPosition='center'
			p='8'
		>
			<Grid
				borderRadius='md'
				placeContent={'center'}
				top='4'
				right='4'
				position={'absolute'}
				boxSize='3rem'
				bg='rgba(255,255,255,0.25)'
				backdropFilter='blur(15px)'
				color='#fff'
				_hover={{ color: '#ccc' }}
				cursor='pointer'
			>
				<BsBookmarkPlus color='current' />
			</Grid>
			<Button colorScheme='red' borderRadius='xs'>
				Watch Now
			</Button>
		</Stack>
	);
};

export default Card;
