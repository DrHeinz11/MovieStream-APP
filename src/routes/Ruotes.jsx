import { Route, Switch } from 'react-router-dom';
import {
	Home,
	SeriesAll,
	Series,
	MovieAll,
	MoviePage,
	SearchAll,
	RecentFavorites,
} from '../pages/index';

const Ruotes = () => {
	return (
		<Switch>
			<Route path='/'>
				<Home />
			</Route>
			<Route path='/movie/all'>
				<MovieAll />
			</Route>
			<Route path='/movie/:id'>
				<MoviePage />
			</Route>
			<Route path='/series/:id'>
				<Series />
			</Route>
			<Route path='/series/all'>
				<SeriesAll />
			</Route>
			<Route path='/search/:id'>
				<SearchAll />
			</Route>
			<Route path='/recent/favorites'>
				<RecentFavorites />
			</Route>
		</Switch>
	);
};

export default Ruotes;
