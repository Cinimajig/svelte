// https://github.com/jorgegorka/svelte-router
import Home from './views/Home.svelte';
import NotFound from './views/404.svelte';

const routes = [
  {
    name: '/',
    component: Home,
  },
  {
    name: '404',
    path: '404',
    component: NotFound
  }
]

export { routes }