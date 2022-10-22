import { Heading, HStack } from '@chakra-ui/react';
import { BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ButtonLogo = () => {
	return (
		<Link to={'/'}>
			<HStack _hover={{opacity:0.5}}>
				<BsFillEyeFill style={{ width: '2rem', height: '2rem' }} />
				<Heading as='h4' fontSize='2xl'>
					MovieStream
				</Heading>
			</HStack>
		</Link>
	);
};

export default ButtonLogo;
