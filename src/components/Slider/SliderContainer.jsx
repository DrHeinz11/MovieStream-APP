import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Stack, Button } from '@chakra-ui/react';
import { useState } from 'react';
import Slides from './Slides';

const SliderContainer = ({ children }) => {
	const [actionSlide, setActionSlide] = useState(0);
	const [widthSlide, setWidthSlide] = useState('');

	const scrollMethods = {
		scrollRight(setActionSlide) {
			setActionSlide(prev => (prev >= widthSlide ? 0 : prev + 280));
		},
		scrollLeft(setActionSlide) {
			setActionSlide(prev => (prev <= 0 ? widthSlide + 10 : prev - 280));
		},
	};

	return (
		<>
			<Stack
				as='article'
				px={{ base: 0, md: 4 }}
				my='10'
				direction={{ base: 'column', md: 'row' }}
				alignItems='center'
				position='relative'
			>
				<Button
					onClick={() => scrollMethods.scrollLeft(setActionSlide)}
					opacity={actionSlide === 0 ? '0' : '1'}
					cursor='pointer'
					width='3rem'
					height='3rem'
					borderRadius='full'
					zIndex={100}
					bg='#fff'
					border='3px solid var(--chakra-brand.100)'
					_hover={{
						borderColor: 'var(--chakra-brand.100)',
						color: 'var(--chakra-brand.100)',
						opacity: '1',
						transition: 'all 300ms ease 0s',
					}}
					display={{ base: 'none', md: 'block' }}
				>
					<BsChevronLeft />{' '}
				</Button>
				<Slides traslate={actionSlide} setWidthSlide={setWidthSlide}>
					{children}
				</Slides>
				<Button
					onClick={() => scrollMethods.scrollRight(setActionSlide)}
					cursor='pointer'
					width='3rem'
					height='3rem'
					borderRadius='full'
					zIndex={100}
					bg='#fff'
					border='3px solid var(--chakra-brand.100)'
					_hover={{
						borderColor: 'var(--chakra-brand.100)',
						transition: 'all 300ms ease 0s',
					}}
					display={{ base: 'none', md: 'block' }}
				>
					<BsChevronRight />
				</Button>
			</Stack>
		</>
	);
};

export default SliderContainer;
