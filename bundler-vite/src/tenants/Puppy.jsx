import { lazy } from 'react'
import renderFeatures from '../renderFeatures';

const App = lazy(() => import('../App').then((module) => module));

const tenantName = 'PuppyCorp';
const featureConfig = [
  {
    domId: 'appRoot',
    Component: App,
    props: { name: tenantName },
  },
];

renderFeatures(featureConfig);
