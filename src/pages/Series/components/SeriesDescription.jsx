import { HStack, Image, Stack } from '@chakra-ui/react';

const SeriesDescription = ({ image, uuid, children }) => {
	return (
		<HStack
			justifyContent={{ base: 'center', md: 'flex-start' }}
			flexWrap='wrap'
			gap='4'
			px='2'
			py='4'
			w='full'
			spacing='0'
			alignItems='flex-start'
		>
			<Image borderRadius='sm' src={image} alt={uuid} />
			<Stack gap='4' spacing='0' maxW='700px'>
				{children}
			</Stack>
		</HStack>
	);
};

export default SeriesDescription;
