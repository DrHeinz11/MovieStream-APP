import { Button, ButtonGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { HandlePaginationFill } from '../../../utils/HandlePaginationFill';

const Pagination = ({ setAlbumQuery, albumQuery }) => {
	const memorizedValue = useMemo(() => HandlePaginationFill());
	return (
		<ButtonGroup
			display={'flex'}
			flexWrap='wrap'
			justifyContent='center'
			spacing='0'
			gap='2'
			colorScheme='red'
		>
			{memorizedValue.map((element, index) => (
				<Button
					size='sm'
					key={index}
					variant={albumQuery === element ? 'solid' : 'outline'}
					onClick={() => {
						setAlbumQuery(element);
						window.scrollTo({ top: 350, behavior: 'smooth' });
					}}
				>
					{element}
				</Button>
			))}
			{albumQuery >= 10 && (
				<>
					{albumQuery > 10 && (
						<>
							<Button
								display={albumQuery > 11 ? 'block' : 'none'}
								size='sm'
								variant='outline'
								onClick={() => setAlbumQuery(prev => prev - 1)}
							>
								{`<`}
							</Button>
							<Button size='sm' variant={albumQuery > 10 ? 'solid' : 'outline'}>
								{albumQuery}
							</Button>
						</>
					)}
					<Button
						size='sm'
						variant={albumQuery === 10 ? 'ghost' : 'outline'}
						onClick={() => {
							setAlbumQuery(prev => prev + 1);
							window.scrollTo({ top: 350, behavior: 'smooth' });
						}}
					>
						{`>`}
					</Button>
				</>
			)}
		</ButtonGroup>
	);
};

export default Pagination;
