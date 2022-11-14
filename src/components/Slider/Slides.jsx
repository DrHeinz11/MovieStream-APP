import { Box, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
const animation = 'transform 500ms ease 0s';
const Slides = ({ children, traslate, setWidthSlide }) => {
	const carrouselReference = useRef();

	useEffect(() => {
		carrouselReference &&
			setWidthSlide(
				carrouselReference.current.scrollWidth -
					carrouselReference.current.offsetWidth
			);
	}, [carrouselReference]);

	return (
		<Box
			w={{ base: 'full', md: '40rem', lg: '56rem' }}
			overflowX={{ base: 'scroll', md: 'hidden' }}
			ref={carrouselReference}
			zIndex={100}
			flex='1'
		>
			<Stack
				as={motion.div}
				w='max-content'
				direction='row'
				p={4}
				gap={4}
				transition={{ base: 'none', md: animation }}
				transform={{
					base: 'none',
					md: `translate3d(-${traslate}px,0,0)`,
				}}
			>
				{children}
			</Stack>
		</Box>
	);
};

export default Slides;
