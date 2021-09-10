import Login from 'pages/Auth/Login';
import MovieCatalog from 'pages/MovieCatalog';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
        <Login/>
        </Route>
        <Route path="/login">
         <Login />
        </Route>
        <Route path="/movieCatalog">
          <MovieCatalog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
