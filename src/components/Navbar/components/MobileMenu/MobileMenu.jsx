import { HStack } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';
import SearchMenu from './SearchMenu';

const MobileMenu = () => {
	return (
		<HStack display={{ base: 'flex', md: 'none' }}>
			<SearchMenu />
			<HamburgerMenu />
		</HStack>
	);
};

export default MobileMenu;
