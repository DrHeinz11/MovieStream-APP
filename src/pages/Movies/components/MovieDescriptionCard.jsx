import {
	Stack,
	Heading,
	Text,
	Button,
	Box,
	Badge,
	HStack,
	Image,
} from '@chakra-ui/react';
const MovieDescriptionCard = ({
	props: { genres, title, description, release, rating, image, uuid },
}) => {
	return (
		<HStack flexWrap='wrap' gap='4' p='2'>
			<Image borderRadius='sm' src={image} alt={uuid} />

			<Stack gap='4' spacing='0' maxW='450px'>
				<Box>
					{genres?.map(element => (
						<Badge
							variant={'subtle'}
							fontSize='sm'
							colorScheme='red'
							key={element.uuid}
						>
							{element.name}
						</Badge>
					))}
				</Box>
				<Box>
					<Heading>{title}</Heading>
					<Text>{description}</Text>
				</Box>
				<Text>Rating:{rating}</Text>
				<Badge
					w='fit-content'
					variant={'subtle'}
					fontSize='sm'
					colorScheme='red'
				>
					Release: {release}
				</Badge>
				<Button variant='solid' size='sm' colorScheme='red'>
					CTA
				</Button>
			</Stack>
		</HStack>
	);
};

export default MovieDescriptionCard;
