import esbuild from "esbuild";
import path from "path";

esbuild.build({
  entryPoints: [path.resolve(".", "src", "entry", "index.js")],
  outfile: "dist/logstyx-js-react.js",
  platform: "browser",
  format: "esm",
  jsx: 'automatic',
  bundle: true,
  minify: true,
  sourcemap: false,
  target: ["es2015"],
  external: ['react', 'react-dom'],
  loader: {
    '.js': 'jsx',  // This tells esbuild to treat .js files as JSX
  },
}).catch(() => process.exit(1));
