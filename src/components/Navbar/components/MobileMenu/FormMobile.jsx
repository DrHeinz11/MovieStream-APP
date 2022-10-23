import { HStack } from '@chakra-ui/react';
import { BsX } from 'react-icons/bs';

const FormMobile = ({ children, setFocus }) => {
	return (
		<HStack
			alignItems='flex-start'
			justifyContent='center'
			bg='blackAlpha.800'
			backdropFilter='blur(12px)'
			position='absolute'
			left='0'
			top='0'
			h='100vh'
			w='full'
			px='4'
			py='4'
			margin='0 !important'
			zIndex='10'

			// onClick={()=>setFocus(prev=>!prev)}
		>
			{children}
			<BsX
				style={{
					width: '2.5rem',
					height: '2.5rem',
					borderRadius: '100rem',
					padding: '5px',
					backgroundColor: '#f1f1f1',
					marginTop: '10px',
				}}
				onClick={() => setFocus(prev => !prev)}
			/>
		</HStack>
	);
};

export default FormMobile;
