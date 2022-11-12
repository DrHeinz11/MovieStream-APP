import { Button, ButtonGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { HandlePaginationFill } from '../../../utils/HandlePaginationFill';

const Pagination = ({
	setAlbumQuery,
	albumQuery,
	colorScheme,
	amount,
	scrollTo,
}) => {
	const memorizedValue = useMemo(() => HandlePaginationFill(amount));
	return (
		<ButtonGroup
			display={'flex'}
			flexWrap='wrap'
			justifyContent='center'
			spacing='0'
			gap='2'
			colorScheme={colorScheme}
		>
			{memorizedValue.map((element, index) => (
				<Button
					size='sm'
					key={index}
					variant={albumQuery === element ? 'solid' : 'outline'}
					onClick={() => {
						setAlbumQuery(element);
						window.scrollTo({
							top: scrollTo.position,
							behavior: scrollTo.behavior,
						});
					}}
				>
					{element}
				</Button>
			))}
			<>
				{albumQuery > memorizedValue.length && (
					<>
						<Button
							display={albumQuery > memorizedValue.length ? 'block' : 'none'}
							size='sm'
							variant='outline'
							onClick={() => setAlbumQuery(prev => prev - 1)}
						>
							{`<`}
						</Button>
						<Button
							size='sm'
							variant={albumQuery > memorizedValue.length ? 'solid' : 'outline'}
						>
							{albumQuery}
						</Button>
					</>
				)}
			</>
			<Button
				size='sm'
				variant={'outline'}
				onClick={() => {
					setAlbumQuery(prev => prev + 1);
					window.scrollTo({ top: 350, behavior: 'smooth' });
				}}
			>
				{`>`}
			</Button>
		</ButtonGroup>
	);
};

export default Pagination;
