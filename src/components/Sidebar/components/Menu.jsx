import { Stack } from '@chakra-ui/react';
import CategoryHeading from './CategoryHeading';
import {
	BsFillPersonFill,
	BsFillAwardFill,
	BsHouseDoorFill,
	BsFillCompassFill,
	BsShieldFillPlus,
} from 'react-icons/bs';
import CustomOption from './CustomOption';
const Menu = () => {
	return (
		<Stack gap='4'>
			<CategoryHeading>Menu</CategoryHeading>
			<Stack gap='2'>
				<CustomOption route='/' title='home'>
					<BsHouseDoorFill />
				</CustomOption>

				<CustomOption route='/discover' title='discover'>
					<BsFillCompassFill />
				</CustomOption>
			</Stack>
		</Stack>
	);
};

export default Menu;
