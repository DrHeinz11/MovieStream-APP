import { HStack, Stack, Text } from '@chakra-ui/react';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import CategoryHeading from './CategoryHeading';
const General = () => {
	return (
		<Stack>
			<CategoryHeading>General</CategoryHeading>
			<Stack>
				<HStack className='links'>
					<BsBoxArrowLeft />
					<Text textTransform='uppercase'>setings</Text>
				</HStack>
				<HStack className='links'>
					<AiFillSetting />
					<Text textTransform='uppercase'>log out</Text>
				</HStack>
			</Stack>
		</Stack>
	);
};

export default General;
