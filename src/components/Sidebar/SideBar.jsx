import { Stack } from '@chakra-ui/react';
import { Library, Menu, Category, General } from './components';

const SideBar = ({ display, props }) => {
	return (
		<Stack
			as='nav'
			display={display}
			gap='2'
			pt='4'
			pl='6'
			minW='264px'
			maxW='264px'
			borderInlineEnd='1px solid #c1c1c1'
			{...props}
		>
			<Menu />
			<Library />
			<Category />
			<General />
		</Stack>
	);
};

export default SideBar;
