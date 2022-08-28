import { LazyExoticComponent, lazy } from 'react';
import { NoLazyLayout } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  patch: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    patch: '/lazylayout',
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "lazyLayout"  */ '../01-lazyload/layout/LazyLayout'
        )
    ),
    name: 'Lazy Loading nested',
  },
  {
    patch: '/nolazy',
    component: NoLazyLayout,
    name: 'No Lazy Component',
  },
];
