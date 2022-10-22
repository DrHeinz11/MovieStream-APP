import { Heading, HStack } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { useSidebarContext } from '../context/context';

const CustomOption = ({ route, children, title }) => {
	const { focus, setFocus } = useSidebarContext();
	return (
		<Link
			className={focus.value === title ? 'links-focus' : 'links'}
			to={route}
			onClick={() => {
				setFocus({ value: title });
			}}
		>
			<HStack gap='1' py={2} align='center' justify='flex-start'>
				{children}
				<Heading textTransform='capitalize' fontWeight='medium' fontSize='lg'>
					{title}
				</Heading>
			</HStack>
		</Link>
	);
};

export default CustomOption;
