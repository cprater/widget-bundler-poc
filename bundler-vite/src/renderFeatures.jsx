import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

const renderFeature = ({domEl, Component, props}) => {
  ReactDOM.createRoot(domEl).render(
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    </React.StrictMode>
  );
};

const renderFeatures = (featureConfig) => {
  featureConfig.forEach(({domId, Component, props }, i) => {
    const targetNode = document.body;
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
      const domEl = document.getElementById(domId);

      if (domEl) {
        observer.disconnect();
        renderFeature({domEl, Component, props});
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
  });
};

export default renderFeatures;