import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

const CustomButton = ({ route, title }) => {
	return (
		<Link to={route}>
			<Text
				bg='brand.100'
				w='fit-content'
				color='#fff'
				_hover={{ backgroundColor: 'base.sub' }}
				px='10'
				py='2'
				fontSize='lg'
				fontWeight='bold'
				textTransform='capitalize'
			>
				{title}
			</Text>
		</Link>
	);
};

export default CustomButton;
