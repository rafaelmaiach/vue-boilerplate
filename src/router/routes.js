const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue'),
	},
	{
		path: '*',
		name: 'notFound',
		redirect: '/',
	},
];

export default routes;
