import { Box } from '@chakra-ui/react';

const FormMobile = ({ children,setFocus }) => {
	return (
		<Box
			px='4'
			py='4'
			position='absolute'
			bg='blackAlpha.800'
			backdropFilter='blur(12px)'
			h='100vh'
			w='full'
			top='0'
			left='0'
			margin='0 !important'
			zIndex='10'
			// onClick={()=>setFocus(prev=>!prev)}
		>
			{children}
		</Box>
	);
};

export default FormMobile;
