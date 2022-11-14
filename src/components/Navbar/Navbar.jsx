import { HStack } from '@chakra-ui/react';
import { ButtonLogo } from '../Sidebar/components';
import Form from '../SideSearchBar/Components/SearchForm';
import CategoryHead from './components/CategoryHead';
import MobileMenu from './components/MobileMenu/MobileMenu';
const Navbar = props => {
	return (
		<HStack
			as='nav' 
			px='6'
			pt='10px'
			w='full'
			margin='0 auto'
			justify='space-between'
			top='0'
			backdropFilter={{ base: 'none', md: 'blur(22px)' }}
			bg='whiteAlpha.700'
			zIndex={'modal'}
			{...props}
		>
			<ButtonLogo />
			<CategoryHead />
			<MobileMenu />
			<Form display={{ base: 'none', md: 'flex' }} />
		</HStack>
	);
};

export default Navbar;
