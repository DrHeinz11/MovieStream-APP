import { chakra } from '@chakra-ui/react';

const CustomPlayer = () => {
	return (
		<chakra.svg
			width={{ base: '34.5px', md: '54.5px' }}
			height={{ base: '40px', md: '50px' }}
			viewBox='0 0 69 80'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<chakra.path
				_hover={{ fill: '#C2002D' }}
				d='M69 40L3.87733e-06 79.8372L7.36001e-06 0.162827L69 40Z'
				fill='#EA2250'
			/>
		</chakra.svg>
	);
};

export default CustomPlayer;
