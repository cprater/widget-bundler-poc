import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createPortal } from 'react-dom'

const createReactRoot = () => {
  console.log('Creating React root...');
  
  let domNode = document.getElementById('upReactRoot');

  if (!domNode) {
    const newDomNode = document.createElement('div');
    newDomNode.id = 'upReactRoot';

    document.body.appendChild(newDomNode);

    domNode = newDomNode;
  }

  return createRoot(domNode);
};

const FeatureRenderer = ({domId, Component, props}) => {
  const [showFeature, setShowFeature] = React.useState(false);
  const targetNode = document.body;
  const config = { attributes: true, childList: true, subtree: true };
  let domEl = document.getElementById(domId)

  const callback = (mutationList, observer) => {
    domEl = document.getElementById(domId)
    console.log('callback', domEl);
    
    if (domEl) {
      observer.disconnect();

      setShowFeature(true);
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);

  // Caveat the createPortal does not empty inner html of the container div
  return showFeature ? createPortal(
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    </React.StrictMode>,
    domEl,
  ) :
  <></>;

  // return showFeature ? featureJSX : <></>;
};

const renderFeatures = (featureConfig) => {
  let reactRoot = null;

  if (!reactRoot) {
    reactRoot = createReactRoot();
  }

  // Create a single React Root
    // What do we render into it?
    // Some sort of component that we can return the portal JSX to
    // reander() can be called multiple times, but will need the same/updated tree
  // Render each feature with a portal
  // Can the feature handle the mutation observer?

  const featureList = featureConfig.map(({domId, Component, props }, i) => {
    return <FeatureRenderer key={i} domId={domId} Component={Component} props={props} />;
  });

  reactRoot.render(<>{featureList.map(feature => feature)}</>);

  // featureConfig.forEach(({domId, Component, props }, i) => {
  //   const targetNode = document.body;
  //   const config = { attributes: true, childList: true, subtree: true };

  //   // Callback function to execute when mutations are observed
  //   const callback = (mutationList, observer) => {
  //     const domEl = document.getElementById(domId);

  //     if (domEl) {
  //       observer.disconnect();
  //       renderFeature({domEl, Component, props});
  //     }
  //   };

  //   // Create an observer instance linked to the callback function
  //   const observer = new MutationObserver(callback);

  //   // Start observing the target node for configured mutations
  //   observer.observe(targetNode, config);
  // });
};

export default renderFeatures;