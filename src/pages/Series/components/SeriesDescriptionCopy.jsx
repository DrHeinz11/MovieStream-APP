import { Badge, Box, Heading, HStack, Text, chakra } from '@chakra-ui/react';

const SeriesDescriptionCopy = ({
	title,
	rating,
	genres,
	description,
	release,
	children,
}) => {
	return (
		<>
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
			<Badge w='fit-content' variant={'subtle'} fontSize='sm' colorScheme='red'>
				Release: {release}
			</Badge>
			<>{children}</>
		</>
	);
};

export default SeriesDescriptionCopy;
