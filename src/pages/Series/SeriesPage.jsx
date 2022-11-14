import { useParams } from 'react-router-dom';
import { useGetMoviesByIdQuery } from '../../services/API.services';
import SeriesDescription from './components/SeriesDescription';
import SeriesDescriptionCopy from './components/SeriesDescriptionCopy';
import SeriesEpisodes from './components/SeriesEpisodes';

const SeriesPage = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetMoviesByIdQuery(id);
	console.log(data);
	return (
		<>
			<SeriesDescription image={data?.result.image} uuid={data?.result.uuid}>
				<>
					<SeriesDescriptionCopy
						title={data?.result.title}
						rating={data?.result.rating}
						genres={data?.result.genres}
						description={data?.result.description}
						release={data?.result.release}
					>
						<SeriesEpisodes episodes={data?.result.episodes} />
					</SeriesDescriptionCopy>
				</>
			</SeriesDescription>
		</>
	);
};

export default SeriesPage;
