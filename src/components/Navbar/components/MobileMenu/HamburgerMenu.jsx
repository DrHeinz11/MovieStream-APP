import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BsX } from 'react-icons/bs';
import SideBar from '../../../Sidebar/SideBar';

const HamburgerMenu = () => {
	const [focus, setFocus] = useState(false);
	return (
		<>
			{!focus ? (
				<BiMenu
					style={{
						width: '2.5rem',
						height: '2.5rem',
					}}
					onClick={() => setFocus(prev => !prev)}
				/>
			) : (
				<BsX
					style={{
						width: '2.5rem',
						height: '2.5rem',
					}}
					onClick={() => setFocus(prev => !prev)}
				/>
			)}
			<Box
				display={focus ? 'content' : 'none'}
				onClick={() => setFocus(prev => !prev)}
				top='5rem'
				left='0'
				position='absolute'
				margin='0 !important'
				minH='100vh'
				width='full'
				bg='blackAlpha.900'
			>
				<SideBar />
			</Box>
		</>
	);
};

export default HamburgerMenu;
