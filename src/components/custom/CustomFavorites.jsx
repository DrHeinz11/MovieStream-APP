import { Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';

const CustomFavorites = () => {
	const [favorites, setFavorites] = useState(false);
	const handleFavorites = () => setFavorites(!favorites);

	useEffect(() => {
		alert(`favorites:${favorites}`);
	}, [favorites]);

	return (
		<Stack
			className='favContainer'
			align={'center'}
			justify='center'
			boxSize={'48px'}
			color={favorites ? 'brand.100' : '#fff'}
			sx={{
				background: 'rgba(255, 255, 255, 0.21)',
				backdropFilter: ' blur(11.4px)',
				border: '1px solid rgba(255, 255, 255, 0.03)',
			}}
			_hover={{ backgroundColor: 'red' }}
			onClick={handleFavorites}
		>
			<MdFavoriteBorder style={{ width: '2rem', height: '2rem' }} />
		</Stack>
	);
};

export default CustomFavorites;
