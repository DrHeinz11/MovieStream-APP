import { Route, Routes } from 'react-router-dom';
import {
	Home,
	SeriesAll,
	SeriesPage,
	MovieAll,
	MoviePage,
	SearchAll,
	RecentFavorites,
} from '../pages/index';

const Ruotes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/movie/all' element={<MovieAll />} />
			<Route path='/movie/:id' element={<MoviePage />} />
			<Route path='/series/:id' element={<SeriesPage />} />
			<Route path='/series/all' element={<SeriesAll />} />
			<Route path='/search/:id' element={<SearchAll />} />
			<Route path='/recent/favorites' element={<RecentFavorites />} />
		</Routes>
	);
};

export default Ruotes;
