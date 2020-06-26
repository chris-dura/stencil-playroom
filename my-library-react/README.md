
# React example

This example based on [StencilJS's docs](https://stenciljs.com/docs/react) for integrating with React, and is based on https://github.com/ionic-team/stencil-ds-plugins-demo/tree/master/packages/component-library-react

> The project https://github.com/ionic-team/stencil-ds-react-template looks very similar, but is older and a little different in `package.json`, etc. :shrug:

1. Build the `my-library` core package, and `npm link` it

    ```shell
    cd ../my-library
    npm run build
    npm link
    ```

2. Link the core package with `npm link`, and install dependencies for running Playroom

    ```shell
    cd ../my-library-react
    npm link my-library
    npm install
    ```

3. Build the react package

    ```shell
    npm run build
    ```

4. Run Playroom

    ```shell
    npm run playroom:start
    ```
