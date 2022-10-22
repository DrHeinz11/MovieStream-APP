import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import FormMobile from './FormMobile';
import SearchFormMobile from './SearchFormMobile';
import { BsGridFill, BsX } from 'react-icons/bs';

const HamburgerMenu = () => {
	const [focus, setFocus] = useState(false);
	return (
		<>
			<Box
			display={{ base: 'content', md: 'none' }}
				boxSize='2rem'
				position='absolute'
				top='4'
				right='4'
				onClick={() => setFocus(!focus)}
			>
				{!focus ? <BsGridFill /> : <BsX />}
			</Box>
			{focus && (
				<FormMobile setFocus={setFocus}>
					<SearchFormMobile setFocus={setFocus} />
				</FormMobile>
			)}
		</>
	);
};

export default HamburgerMenu;
