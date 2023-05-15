import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import { generateOpenApiDocument } from "trpc-openapi";

import { appRouter, type AppRouter } from "./src/root";

export { appRouter, type AppRouter } from "./src/root";
export { createTRPCContext } from "./src/trpc";

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "Example API",
  description: "OpenAPI compliant REST API built using tRPC with Express",
  version: "1.0.0",
  baseUrl: "http://localhost:4000/api",
  docsUrl: "https://github.com/jlalmes/trpc-openapi",
});
