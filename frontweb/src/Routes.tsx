import Navbar from "components/Navbar";
import Auth from "pages/Auth";
import MovieCatalog from "pages/MovieCatalog";
import MovieDetails from "pages/MovieDetails";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import history from './util/history';

const Routes = () => (
	<Router history={history}>
		<Switch>
			<Navbar />
			<Switch>
				<Redirect from="/" to="/auth/login" exact />
				<Route path="/auth">
					<Auth />
				</Route>
				<Route path="/movies" exact>
					<MovieCatalog />
				</Route>
				<Route path="/movies/:movieId">
					<MovieDetails />
				</Route>
			</Switch>
		</Switch>
	</Router>
);

export default Routes;
