import { Box, Stack, chakra } from '@chakra-ui/react';
import { useState } from 'react';
import CustomPlayer from '../../../components/custom/CustomPlayer';
import MovieEmbedServers from './MovieEmbedServers';

const MoviePlayer = ({ embedUrls, bgUrl }) => {
	const [serving, setServing] = useState(() => embedUrls[0]);
	console.log(serving);
	return (
		<Stack spacing='0' gap='4' alignItems='center' px='4'>
			<chakra.a
				rel='noopener noreferrer'
				target='_blank'
				w='fit-content'
				maxW='100%'
				href={serving.url}
				borderRadius='md'
			>
				<Box
					backgroundImage={`url('${bgUrl}')`}
					backgroundPosition='center'
					backgroundRepeat='no-repeat'
					backgroundSize='cover'
					borderRadius='md'
				>
					<Stack
						py='10'
						borderRadius='md'
						px='20'
						spacing='0'
						gap='4'
						align='center'
						bg='blackAlpha.800'
					>
						<chakra.span color='white' fontSize='lg' textTransform='capitalize'>
							{serving.server} player.
						</chakra.span>
						<CustomPlayer />
						<chakra.span color='white' fontSize='md'>
							It is advisable to have an adbloker
						</chakra.span>
					</Stack>
				</Box>
			</chakra.a>
			{embedUrls && (
				<MovieEmbedServers
					serving={serving}
					setServing={setServing}
					embedUrls={embedUrls}
				/>
			)}
		</Stack>
	);
};

export default MoviePlayer;
