import * as esbuild from "esbuild-wasm";

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      // these two methods are overriding the default behavior of
      // es build
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log("onResole", args);
        return { path: args.path, namespace: "a" };
      });
      // these two methods are overriding the default behavior of
      // es build
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log("onLoad", args);

        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: `
              import message from 'tiny-test-pkg';
              console.log(message);
            `,
          };
        }
      });
    },
  };
};
