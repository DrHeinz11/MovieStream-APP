import { HStack } from '@chakra-ui/react';
import { ButtonLogo } from '../Sidebar/components';
import Form from '../SideSearchBar/Components/SearchForm';
import CategoryHead from './components/CategoryHead';
import HamburgerMenu from './components/HamburgerMenu';

const Navbar = () => {
	return (
		<HStack
			py='4'
			px='6'
			w='full'
			maxW='1250px'
			margin='0 auto'
			justify='space-between'
			position='sticky'
			top='0'
			backdropFilter={{ base: 'none', md: 'blur(22px)' }}
			bg='whiteAlpha.700'
			zIndex={'modal'}
		>
			<ButtonLogo />
			<CategoryHead />
			<HamburgerMenu />
			<Form display={{ base: 'none', md: 'flex' }} />
		</HStack>
	);
};

export default Navbar;
