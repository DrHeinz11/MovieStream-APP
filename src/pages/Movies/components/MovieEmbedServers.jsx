import { Button, ButtonGroup, HStack, Tag } from '@chakra-ui/react';

const MovieEmbedServers = ({ serving, setServing, embedUrls }) => {
	return (
		<HStack flexWrap='wrap' gap='2' spacing='0'>
			<Tag colorScheme={'red'}>Servers:</Tag>
			<ButtonGroup
				flexWrap='wrap'
				justifyContent={'flex-start'}
				gap='2'
				spacing='0'
				size={{ base: 'sm', md: 'md' }}
			>
				{embedUrls?.map(
					element =>
						element.priority > 0 && (
							<Button
								key={element.server}
								colorScheme='red'
								variant={
									serving.server === element.server ? 'solid' : 'outline'
								}
								onClick={() => setServing(element)}
							>
								{element.server}
							</Button>
						)
				)}
			</ButtonGroup>
		</HStack>
	);
};

export default MovieEmbedServers;
