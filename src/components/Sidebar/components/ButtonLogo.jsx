import { Heading, HStack } from '@chakra-ui/react';
import { BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HandleScrollToTop } from '../../../utils/HandleScrollToTop';

const ButtonLogo = () => {
	return (
		<Link to={'/'} onClick={HandleScrollToTop}>
			<HStack mr='2' _hover={{ opacity: 0.5 }}>
				<Heading
					display='flex'
					direction='row'
					alignItems='center'
					as='h4'
					fontSize='2xl'
				>
					M<BsFillEyeFill style={{ width: '1.5rem', height: '1.5rem' }} />{' '}
					vieStream
				</Heading>
			</HStack>
		</Link>
	);
};

export default ButtonLogo;
