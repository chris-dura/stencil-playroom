# stencil-playroom

Example repo integrating StencilJS and PlayroomJS.

Based on https://github.com/ionic-team/stencil-ds-plugins-demo

1. Build `my-library` core package
2. Link core package

```shell
cd my-library
npm link
```

3. Link react library deps to core library

```shell
cd my-library-react
npm link my-library
```

4. Build `my-library-react`
