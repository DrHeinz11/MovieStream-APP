import { Stack } from '@chakra-ui/react';
import {
	BsCollectionPlayFill,
	BsCameraReelsFill,
	BsFillPuzzleFill,
} from 'react-icons/bs';
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
				<CustomOption route='/series/anime' title='anime'>
					<BsFillPuzzleFill />
				</CustomOption>
			</Stack>
		</Stack>
	);
};

export default Category;
