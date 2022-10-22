import { Box, Heading, Stack } from '@chakra-ui/react';

const Menu = ({ children, heading }) => {
	return (
		<Stack>
			<Heading>{heading}</Heading>
			<Box>{children}</Box>
		</Stack>
	);
};

export default Menu;
