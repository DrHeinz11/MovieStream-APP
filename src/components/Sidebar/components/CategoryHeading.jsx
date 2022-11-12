import { Heading } from '@chakra-ui/react';

const CategoryHeading = ({ children }) => {
	return (
		<Heading fontSize='xl' textTransform='uppercase' color='base.gray'>
			{children}
		</Heading>
	);
};

export default CategoryHeading;
