import Navbar from "components/Navbar";
import Auth from "pages/Auth";
import { Route, Router, Switch } from "react-router-dom";
import history from './util/history';


const Routes = () => {
    return (
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Auth/>
          </Route>
        </Switch>
      </Router>
    );
  }
  
  export default Routes;