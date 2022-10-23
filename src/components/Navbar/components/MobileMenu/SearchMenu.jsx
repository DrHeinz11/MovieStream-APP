import { Grid } from '@chakra-ui/react';
import { useState } from 'react';
import FormMobile from './FormMobile';
import SearchFormMobile from './SearchFormMobile';
import { BsSearch, BsX } from 'react-icons/bs';

const SearchMenu = () => {
	const [focus, setFocus] = useState(false);
	return (
		<>
			<Grid
				boxSize='3rem'
				placeContent={'center'}
				borderRadius='full'
				bg='#f1f1f1'
				onClick={() => setFocus(!focus)}
			>
				{!focus ? <BsSearch /> : <BsX />}
			</Grid>
			{focus && (
				<FormMobile setFocus={setFocus}>
					<SearchFormMobile setFocus={setFocus} />
				</FormMobile>
			)}
		</>
	);
};

export default SearchMenu;
