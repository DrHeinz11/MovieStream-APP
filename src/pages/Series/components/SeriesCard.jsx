/* eslint-disable react/prop-types */
import { Badge, Button, Grid, HStack, Stack, Tag } from '@chakra-ui/react';
import { useState } from 'react';
import { BsBookmarkPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSeeLater, removeSeeLater } from '../../../redux/SeeLater';
import { HandleScrollToTop } from '../../../utils/HandleScrollToTop';

const SeriesCard = ({ bgUrl, bgAlt, title, id, year, rating, episodes }) => {
	const [focus, setFocus] = useState(false);

	const dispatcher = useDispatch();
	const handleClick = () => {
		dispatcher(addSeeLater({ name: title, id, status: true, type: 'series' }));
		setFocus(prev => !prev);
	};
	const handleClickRemove = () => {
		setFocus(prev => !prev);
		dispatcher(
			removeSeeLater({ name: title, id, status: true, type: 'series' })
		);
	};
	return (
		<Stack
			position='relative'
			justifyContent={'end'}
			backgroundImage={`url(${bgUrl})`}
			alt={bgAlt}
			minHeight='sm'
			borderRadius='sm'
			backgroundSize={'cover'}
			backgroundPosition={{ base: 'auto', md: 'center' }}
			boxShadow={'md'}
			_hover={{transform:'scale(1.025)'}}
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
				to={`/series/${id}`}
			>
				<Stack
					px='4'
					pb='4'
					pt='32'
					spacing='0'
					gap='2'
					height={'23rem'}
					justifyContent='flex-end'
				>
					<Badge
						boxShadow={'md'}
						w='fit-content'
						whiteSpace={'normal'}
						fontSize='lg'
					>
						{title}
					</Badge>
					<Tag
						boxShadow={'md'}
						borderRadius='sm'
						colorScheme={'green'}
						w='fit-content'
						size='md'
					>
						Episodes: {episodes.length}
					</Tag>
					<HStack spacing='0' gap='4'>
						{' '}
						<Badge boxShadow={'md'} w='fit-content' size='sm'>
							Rating: {rating}
						</Badge>
						<Badge
							boxShadow={'md'}
							colorScheme={'green'}
							w='fit-content'
							size='sm'
						>
							Year: {year}
						</Badge>
					</HStack>
					<Button boxShadow={'md'} colorScheme='green' borderRadius='sm'>
						Watch Now
					</Button>
				</Stack>
			</Link>
		</Stack>
	);
};

export default SeriesCard;
