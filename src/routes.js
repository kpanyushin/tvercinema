// import HomePage from '_pages/HomePage';
import MainPage from '_pages/MainPage';
import AdminPage from '_pages/AdminPage';

export default [
  {
    path: '/',
    exact: true,
    cache: false,
    component: MainPage,
  },
  {
    path: '/admin/:section?/:id?',
    exact: true,
    cache: false,
    component: AdminPage,
    sagasToRun: [],
  },
];
