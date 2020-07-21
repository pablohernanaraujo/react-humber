import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
];

export default Routes;
