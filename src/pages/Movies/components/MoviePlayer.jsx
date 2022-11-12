import { Box, Button, ButtonGroup, Stack, Tag, chakra } from '@chakra-ui/react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import CustomPlayer from '../../../components/custom/CustomPlayer';

const MoviePlayer = ({ embedUrls }) => {
	const [serving, setServing] = useState(() => embedUrls[0]);
	console.log(serving);
	return (
		<Stack spacing='0' gap='4' alignItems='center' px='4'>
			{/* <ReactPlayer url={[serving]} /> */}
			<chakra.a
				position='relative'
				rel='noopener noreferrer'
				target='_blank'
				w='fit-content'
				maxW='100%'
				href={serving.url}
			>
				<chakra.span
					position='absolute'
					top='1rem'
					left={'11rem'}
					color='brand.100'
					textTransform='capitalize'
				>
					{serving.server} player.
				</chakra.span>
				<CustomPlayer />
			</chakra.a>
			<Tag>Servers:</Tag>
			<ButtonGroup>
				{embedUrls?.map(
					element =>
						element.priority > 0 && (
							<Button
								key={element.server}
								onClick={() => setServing(element)}
							>
								{element.server}
							</Button>
						)
				)}
			</ButtonGroup>
		</Stack>
	);
};

export default MoviePlayer;
