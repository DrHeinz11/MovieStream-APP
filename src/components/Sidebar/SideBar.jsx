import { Divider, Stack } from '@chakra-ui/react';
import { Library, Menu, Category, General, ButtonLogo } from './components';
import { SideBarProvider } from './context/context';

const SideBar = () => {
	return (
		<SideBarProvider>
			<Stack gap='2' py='6' pl='8' borderInlineEnd='1px solid #c1c1c1'>
				<ButtonLogo />
				<Divider />
				<Menu />
				<Library />
				<Category />
				<General />
			</Stack>
		</SideBarProvider>
	);
};

export default SideBar;
