import { lazy } from 'react'
import renderFeatures from '../renderFeatures';

const Alert = lazy(() => 
  import('@mui/material').then((module) => ({ default: module.Alert }))
);
const App = lazy(() => import('../App').then((module) => module));
const Message = lazy(() => import('../components/Message').then((module) => module));

const tenantName = 'TacoCorp';
const featureConfig = [
  {
    domId: 'appRoot',
    Component: App,
    props: { name: tenantName, withDelayedMessage: true },
  },
  {
    domId: 'alertRoot',
    Component: Alert,
    props: { severity: 'info', children: 'This is an alert!' },
  },
  {
    domId: 'delayedMessage',
    Component: Message,
    props: {},
  },
];

renderFeatures(featureConfig);