import path from "path";
import queryString from "query-string";
import { defineConfig, type ViteDevServer } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const mapNextJsAssets = {
  name: "map-next-js-assets",
  configureServer(server: ViteDevServer) {
    server.middlewares.use("/", (req, _, next) => {
      const params = queryString.parse(req.url as string) || {};
      const nextImageUrl = params["/_next/image?url"] as string;

      if (nextImageUrl) {
        req.url = `/@fs/${path.resolve(
          __dirname,
          `public${nextImageUrl.replaceAll("/", "\\")}`,
        )}`;
      }

      next();
    });
  },
};

export default defineConfig({
  resolve: {
    alias: {
      "next/original-image": require.resolve("next/image"),
      "next/image": path.resolve(__dirname, "./.ladle/UnoptimizedImage.tsx"),
    },
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react-jsx",
      },
    },
  },
  define: {
    "process.env": process.env,
  },
  envPrefix: ["NEXT_", "VITE_"],
  publicDir: "public",
  plugins: [tsconfigPaths(), mapNextJsAssets],
  server: {
    port: 61000,
    open: false,
  },
});
