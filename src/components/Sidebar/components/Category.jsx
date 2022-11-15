import { Stack } from '@chakra-ui/react';
import { BsCollectionPlayFill, BsCameraReelsFill } from 'react-icons/bs';
import CustomOption from './CustomOption';
import CategoryHeading from './CategoryHeading';

const Category = () => {
	return (
		<Stack>
			<CategoryHeading>Category</CategoryHeading>
			<Stack>
				<CustomOption route='/series/all' title='Series/Tv-Show'>
					<BsCollectionPlayFill />
				</CustomOption>
				<CustomOption route='/movie/all' title='Movie'>
					<BsCameraReelsFill />
				</CustomOption>
			</Stack>
		</Stack>
	);
};

export default Category;
