import { Route, Routes } from 'react-router-dom';
import {
	Home,
	SeriesAll,
	SeriesPage,
	MovieAll,
	MoviePage,
	SearchAll,
	RecentFavorites,
	GenrePage
} from '../pages/index';

const Ruotes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/movie/all' element={<MovieAll />} />
			<Route path='/movie/:id' element={<MoviePage />} />
			<Route path='/series/:id' element={<SeriesPage />} />
			<Route path='/genre/:id' element={<GenrePage />} />
			<Route path='/series/all' element={<SeriesAll />} />
			<Route path='/search/:id' element={<SearchAll />} />
			<Route path='/see-later/' element={<RecentFavorites />} />
		</Routes>
	);
};

export default Ruotes;
