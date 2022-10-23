import { chakra } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchFormMobile = ({ setFocus }) => {
	const searchRef = useRef();
	const handleSearchSubmit = event => {
		event.preventDefault();
		console.log(searchRef.current.value);
		setTimeout(() => {
			setFocus(prev => !prev);
		}, 500);
	};

	return (
		<chakra.form
			bg='#f1f7ff'
			py='2'
			px='4'
			borderRadius='full'
			display='flex'
			zIndex='1000'
			gap='2'
			onSubmit={handleSearchSubmit}
		>
			<chakra.button
				display='flex'
				alignItems='center'
				justifyContent='center'
				borderRadius='full'
				bg='#f1f7ff'
				boxSize='2.5rem'
				type='submit'
				onSubmit={handleSearchSubmit}
			>
				<BsSearch className='width' />
			</chakra.button>
			<chakra.input
				_placeholder={{
					color: '#c1c1c1',
				}}
				_focusVisible={{ outline: 0 }}
				bg='transparent'
				fontSize='lg'
				type='text'
				placeholder='Search'
				flex='1'
				ref={searchRef}
			/>
		</chakra.form>
	);
};

export default SearchFormMobile;
