import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import logo from '../assets/change360_logo.jpg';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
            <NavLink to="/">
          <img src={logo} alt="Logo" width="80" />
        </NavLink>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Dapp
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Connect
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
