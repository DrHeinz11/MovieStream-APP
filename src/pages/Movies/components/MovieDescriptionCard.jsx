import {
	Stack,
	Heading,
	Text,
	chakra,
	Box,
	Badge,
	HStack,
	Image,
} from '@chakra-ui/react';
const MovieDescriptionCard = ({
	props: { genres, title, description, release, rating, image, uuid },
}) => {
	return (
		<HStack
			justifyContent='center'
			flexWrap='wrap'
			gap='4'
			px='2'
			py='4'
			w='full'
			spacing='0'
		>
			<Image borderRadius='sm' src={image} alt={uuid} />

			<Stack gap='4' spacing='0' maxW='450px'>
				<HStack flexWrap='wrap' spacing='0' gap='2'>
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
				</HStack>
				<Box>
					<Heading>{title}</Heading>
					<Text>{description}</Text>
				</Box>
				<Text>
					Rating:{'  '}
					<Badge
						w='fit-content'
						variant={'subtle'}
						fontSize='sm'
						borderRadius='sm'
						color='black'
					>
						<chakra.span color='#bf930d'>★</chakra.span> {rating}
					</Badge>
				</Text>
				<Badge
					w='fit-content'
					variant={'subtle'}
					fontSize='sm'
					colorScheme='red'
				>
					Release: {release}
				</Badge>
			</Stack>
		</HStack>
	);
};

export default MovieDescriptionCard;
