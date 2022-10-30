import { Stack } from '@chakra-ui/react';
import { Category, General, Library } from '../../../Sidebar/components';

const HamburguerOption = () => {
	return (
		<Stack pl='3' py='4'>
			<Category />
			<Library />
			<General />
		</Stack>
	);
};

export default HamburguerOption;
