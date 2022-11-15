import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HandleScrollToTop } from '../../utils/HandleScrollToTop';

const CustomLink = ({ route }) => {
	return (
		<Link to={route}>
			<Text
				onClick={() =>
					HandleScrollToTop({
						direction: 'top',
						coordinate: 0,
						behavior: 'smooth',
					})
				}
				fontSize='md'
				fontWeight='light'
				color='brand.100'
			>
				Ver más
			</Text>
		</Link>
	);
};

export default CustomLink;
