import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Router>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />
            <ul>
              {routes.map(({ name, patch }) => (
                <li key={name}>
                  <NavLink to={patch} activeClassName='nav-active' exact>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ patch, component: Component }) => (
              <Route key={patch} path={patch} render={() => <Component />} />
            ))}

            <Redirect to={routes[0].patch} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
