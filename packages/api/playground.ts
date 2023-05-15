import { type inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { appRouter, openApiDocument } from '.';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { SwaggerTheme } from "swagger-themes";
import swaggerUi from "swagger-ui-express";
import { createOpenApiExpressMiddleware } from "trpc-openapi";
import type { OpenApiMeta } from "trpc-openapi";
import cors from "cors";

// created for each request
const createContext = ({ }: trpcExpress.CreateExpressContextOptions) => ({});

type Context = inferAsyncReturnType<typeof createContext>;

initTRPC.context<Context>().meta<OpenApiMeta>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});

const app = express();

const port = 4000;

const startServer = () => {
    console.log('Starting the playground server');

    // Setup CORS
    app.use(cors());

    app.use(
        '/api/trpc',
        trpcExpress.createExpressMiddleware({
            router: appRouter,
            createContext,
        })
    );
    // Handle incoming OpenAPI requests
    app.use(
        "/api",
        createOpenApiExpressMiddleware({ router: appRouter, createContext })
    );

    // Swagger Theme
    const theme = new SwaggerTheme("v3");
    const options = {
        explorer: true,
        customCss: theme.getBuffer("dark"),
    };

    // Serve Swagger UI with our OpenAPI schema
    app.use("/", swaggerUi.serve);
    app.get("/", swaggerUi.setup(openApiDocument, options));

    app.listen(port, () => {
        console.log(`listening at http://localhost:${port}`);
    });
};

startServer();
