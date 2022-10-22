import { Heading } from '@chakra-ui/react';

const CategoryHeading = ({ children }) => {
	return (
		<Heading fontSize='xl' textTransform='uppercase' color='brand.gray'>
			{children}
		</Heading>
	);
};

export default CategoryHeading;
