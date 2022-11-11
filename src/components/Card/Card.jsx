/* eslint-disable react/prop-types */
import { Badge, Button, Grid, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { BsBookmarkPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSeeLater, removeSeeLater } from '../../redux/SeeLater';
import { HandleScrollToTop } from '../../utils/HandleScrollToTop';

const Card = ({ bgUrl, title, id, year, rating }) => {
	const [focus, setFocus] = useState(false);

	const dispatcher = useDispatch();
	const handleClick = () => {
		dispatcher(addSeeLater({ name: title, id, status: true }));
		setFocus(prev => !prev);
	};
	const handleClickRemove = () => {
		setFocus(prev => !prev);
		dispatcher(removeSeeLater({ name: title, id, status: true }));
	};
	return (
		<Stack
			position='relative'
			justifyContent={'end'}
			backgroundImage={`url(${bgUrl})`}
			height='xs'
			borderRadius='sm'
			backgroundSize={'cover'}
			backgroundPosition='center'
			p='4'
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
				onClick={() =>
					HandleScrollToTop({
						direction: 'top',
						coordinate: 0,
						behavior: 'auto',
					})
				}
				to={`/movie/${id}`}
			>
				<Stack>
					<Badge colorScheme={'pink'} w='fit-content' size='sm'>
						Año: {year}
					</Badge>
					<Badge colorScheme={'red'} w='fit-content' size='sm'>
						Rating: {rating}
					</Badge>
					<Badge>{title}</Badge>
				</Stack>
				<Button colorScheme='red' borderRadius='xs'>
					Watch Now
				</Button>
			</Link>
		</Stack>
	);
};

export default Card;
