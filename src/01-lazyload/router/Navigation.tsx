import { Link, Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

const Navigation = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <h2>LazyLoad Pages</h2>
      <ul>
        <li>
          <Link to={`${url}/lazy1`}>Lazy Load Page 1</Link>
        </li>
        <li>
          <Link to={`${url}/lazy2`}>Lazy Load Page 2</Link>
        </li>
        <li>
          <Link to={`${url}/lazy3`}>Lazy Load Page 3</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/lazy1`}>
          <LazyPage1 />
        </Route>
        <Route path={`${path}/lazy2`}>
          <LazyPage2 />
        </Route>
        <Route path={`${path}/lazy3`}>
          <LazyPage3 />
        </Route>

        <Redirect to={`${path}/lazy1`}></Redirect>
      </Switch>
    </>
  );
};

export default Navigation;
