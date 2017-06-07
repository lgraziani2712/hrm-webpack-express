# Webpack for nodejs

Contains a simple configuration for `HRM` for `express` with `webpack@^2.6.1`.

- The module in charge of doing the HRM is `./dev-elements/hrm-loader.js`.
- The root file is `./src/main.js`.
- The webpack file is `./.dev-tools/webpack.config.dev.js`.

### Instructions

1. Clone the repo.
2. `yarn` or `npm install`
3. In one terminal: `yarn start` or `npm start` (for the build).
4. In another terminal: `yarn server` or `npm run server` (for the actual server).
5. Open `http://localhost:3000`.
6. Try modifying `./src/main.js`.
