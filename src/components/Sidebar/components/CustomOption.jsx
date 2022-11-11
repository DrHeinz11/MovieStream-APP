import { Heading, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HandleScrollToTop } from '../../../utils/HandleScrollToTop';
import { useSidebarContext } from '../context/context';

const CustomOption = ({ route, children, title }) => {
	const { focus, setFocus } = useSidebarContext();
	return (
		<Link
			className={focus.value === title ? 'links-focus' : 'links'}
			to={route}
			onClick={() => {
				setFocus({ value: title });
				HandleScrollToTop({
					direction: 'top',
					coordinate: 0,
					behavior: 'smooth',
				});
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
