import HomePage from '_pages/HomePage';
import AdminPage from '_pages/AdminPage';

export default [
  {
    path: '/',
    exact: true,
    cache: false,
    component: HomePage,
    sagasToRun: [],
  },
  {
    path: '/admin/:section?',
    exact: true,
    cache: false,
    component: AdminPage,
    sagasToRun: [],
  },
];
