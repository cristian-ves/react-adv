import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;


interface Route {
    path: string;
    component: LazyExoticComponent< JSXComponent > | JSXComponent;
    name: string;
    children?: Route[];
}

// const LazyPage1 = lazy(() => import('../pages/LazyPage1'));
// const LazyPage2 = lazy(() => import('../pages/LazyPage2'));
// const LazyPage3 = lazy(() => import('../pages/LazyPage3'));
const LazyLayout = lazy(()=>import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazyload',
        component: LazyLayout,
        name: "LazyLoading Nested"
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No Lazy loading'
    }
]