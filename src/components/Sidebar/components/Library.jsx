import { MdWatchLater } from 'react-icons/md';
import { BsFillStarFill, BsCloudDownloadFill } from 'react-icons/bs';
import { Stack } from '@chakra-ui/react';
import CategoryHeading from './CategoryHeading';
import CustomOption from './CustomOption';
const Library = () => {
	return (
		<Stack gap='4'>
			<CategoryHeading>Library</CategoryHeading>
			<Stack gap='2'>
				<CustomOption route='/recent/' title='Recent'>
					<MdWatchLater />
				</CustomOption>

				<CustomOption route='/top-rated' title='Top rated'>
					<BsFillStarFill />
				</CustomOption>
				<CustomOption route='/download' title='Downloaded'>
					<BsCloudDownloadFill />
				</CustomOption>
			</Stack>
		</Stack>
	);
};

export default Library;
