import Login from 'pages/Auth/Login';
import Movie from 'pages/Movie';
import MovieCatalog from 'pages/MovieCatalog';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/movieCatalog">
          <MovieCatalog />
        </Route>
        <Route path="/movie/:movieId">
          <Movie />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
