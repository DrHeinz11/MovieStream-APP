/* eslint-disable react/prop-types */
import { Badge, Button, Grid, Stack, chakra } from '@chakra-ui/react';
import { useState } from 'react';
import { BsBookmarkPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRecents } from '../../redux/recentSlice';
import { addSeeLater, removeSeeLater } from '../../redux/SeeLater';
import { HandleScrollToTop } from '../../utils/HandleScrollToTop';

const Card = ({ bgUrl, title, id, year, rating, width = 'auto' }) => {
	const [focus, setFocus] = useState(false);

	const dispatcher = useDispatch();
	const handleClick = () => {
		dispatcher(addSeeLater({ name: title, id, status: true, bgUrl }));
		setFocus(prev => !prev);
	};
	const handleClickRemove = () => {
		setFocus(prev => !prev);
		dispatcher(removeSeeLater({ name: title, id, status: true, bgUrl }));
	};
	return (
		<Stack
			position='relative'
			justifyContent={'end'}
			backgroundImage={`url(${bgUrl})`}
			minHeight='sm'
			borderRadius='sm'
			backgroundSize={'cover'}
			backgroundPosition='center'
			boxShadow={'md'}
			width={width}
			_hover={{ transform: 'scale(1.025)' }}
		>
			{!focus ? (
				<Grid
					borderRadius='md'
					placeContent={'center'}
					top='4'
					right='4'
					position={'absolute'}
					boxSize='3rem'
					bg='rgba(255,255,255,0.25)'
					backdropFilter='blur(15px)'
					color='#fff'
					_hover={{ color: '#ccc' }}
					cursor='pointer'
					onClick={handleClick}
				>
					<BsBookmarkPlus color='current' />
				</Grid>
			) : (
				<Grid
					borderRadius='md'
					placeContent={'center'}
					top='4'
					right='4'
					position={'absolute'}
					boxSize='3rem'
					bg='rgba(255,255,255,0.25)'
					backdropFilter='blur(15px)'
					color='red'
					_hover={{ color: '#000' }}
					cursor='pointer'
					onClick={handleClickRemove}
				>
					<BsBookmarkPlus color='current' />
				</Grid>
			)}
			<Link
				onClick={() => {
					HandleScrollToTop({
						direction: 'top',
						coordinate: 0,
						behavior: 'auto',
					});
					dispatcher(addRecents({ name: title, id, status: true, bgUrl }));
				}}
				to={`/movie/${id}`}
			>
				<Stack px='4' pb='4' pt='32' spacing='0' gap='2'>
					<Badge
						boxShadow={'md'}
						w='fit-content'
						whiteSpace={'normal'}
						fontSize='md'
					>
						{title}
					</Badge>
					<Badge
						boxShadow={'md'}
						colorScheme={'pink'}
						w='fit-content'
						size='sm'
					>
						Año: {year}
					</Badge>
					<Badge boxShadow={'md'} w='fit-content' size='sm'>
						Rating: <chakra.span color='#bf930d'>★</chakra.span>
						{rating}
					</Badge>
					<Button boxShadow={'md'} colorScheme='red' borderRadius='sm'>
						Watch Now
					</Button>
				</Stack>
			</Link>
		</Stack>
	);
};

export default Card;
