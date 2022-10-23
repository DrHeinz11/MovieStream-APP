import { HStack } from '@chakra-ui/react';
import { ButtonLogo } from '../Sidebar/components';
import Form from '../SideSearchBar/Components/SearchForm';
import CategoryHead from './components/CategoryHead';
import MobileMenu from './components/MobileMenu/MobileMenu';
const Navbar = () => {
	return (
		<HStack
			py='4'
			px='6'
			w='full'
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
			<MobileMenu />
			<Form display={{ base: 'none', md: 'flex' }} />
		</HStack>
	);
};

export default Navbar;
