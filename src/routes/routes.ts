import { LazyExoticComponent, lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  patch: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

const LazyPage1 = lazy(
  () =>
    import(/* webpackChunkName: "lazy1"  */ '../01-lazyload/pages/LazyPage1')
);
const LazyPage2 = lazy(
  () =>
    import(/* webpackChunkName: "lazy2"  */ '../01-lazyload/pages/LazyPage2')
);
const LazyPage3 = lazy(
  () =>
    import(/* webpackChunkName: "lazy3"  */ '../01-lazyload/pages/LazyPage3')
);

export const routes: Route[] = [
  {
    patch: '/lazy1',
    component: LazyPage1,
    name: 'LazyPage1',
  },
  {
    patch: '/lazy2',
    component: LazyPage2,
    name: 'LazyPage2',
  },
  {
    patch: '/lazy3',
    component: LazyPage3,
    name: 'LazyPage3',
  },
];
