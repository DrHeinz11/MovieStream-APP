import { Stack } from '@chakra-ui/react';
import { Library, Menu, Category, General } from './components';
import { SideBarProvider } from './context/context';

const SideBar = () => {
	return (
		<SideBarProvider>
			<Stack
				display={{ base: 'none', md: 'flex' }}
				gap='2'
				pt='4'
				pl='8'
				borderInlineEnd='1px solid #c1c1c1'
			>
				<Menu />
				<Library />
				<Category />
				<General />
			</Stack>
		</SideBarProvider>
	);
};

export default SideBar;
