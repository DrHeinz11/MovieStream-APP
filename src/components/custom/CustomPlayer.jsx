import { chakra } from '@chakra-ui/react';

const CustomPlayer = () => {
	return (
		<chakra.svg
			maxW='450px'
            w='full'
			height='250px'
			viewBox='0 0 450 250'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			boxShadow={'md'}
		>
			<rect
				x='0.5'
				y='0.5'
				width='449'
				height='249'
				rx='4.5'
				fill='#FAFAFA'
				stroke='#CCCCCC'
			/>
			<chakra.path
				_hover={{ fill: '#C2002D' }}
				d='M259 125L208 154.445L208 95.5551L259 125Z'
				fill='#EA2250'
			/>
		</chakra.svg>
	);
};

export default CustomPlayer;
