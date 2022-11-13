import { chakra } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const SearchFormMobile = ({ setFocus, setDataSearch }) => {
	const searchRef = useRef();
	const navigate = useNavigate();
	const handleSearchSubmit = event => {
		event.preventDefault();
		const dataHash = searchRef.current.value.split(' ').join('-');
		navigate(`/search/${dataHash}`);
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
