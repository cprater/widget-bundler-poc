# Widget bundler PoC
A Proof of Concept for creating JS bundles of separate features to embedd in a variety of containing applications

## Directory overview
```
angular-host/ Example AngularJS container
bundler-vite/ Widget bundler
PuppyCompany/ Example external site container
TacoCompany/ Example external site container
react-host/ Example React SPA container
```

## Bundler overview
`bundler-vite/src/tenants`

Example configurations for features a tenant wants. The actual `featureConfig` could live in a `.yaml` file or seperately. However, the `lazy()` imports at the top are required.

`bundler-vite/src/components`

Example components to prove out concepts. This directory will not exist

`bundler-vite/renderFeatures.jsx`

Example helper to render features dynamically using a MutationObserver. This functionality should exist, but will be cleaned up.

`bundler-vite/vite.config.js`

Simple Vite config which accomplishes the requirements. Probably can be productionized a bit too.

## Running instructions
- Clone the git repo
- In the `bundler-vite/` directory
  - `npm install` Install dependencies
  - `npm run build` Build assets
  - `npm run serve` Serve assets on port `8080`
- To simulate an embedded tenant, with the bundler `serve` running:
  - In a new terminal tab/window, navigate to `TacoCompany`
  - `npm start` to serve the example on the next available port (`8081`)