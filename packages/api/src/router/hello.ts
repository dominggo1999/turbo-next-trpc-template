import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const helloRouter = createTRPCRouter({
    sayHello: publicProcedure
        .meta({ openapi: { method: 'GET', path: '/say-hello' } })
        .input(z.object({ name: z.string() }))
        .output(z.object({ message: z.string() }))
        .query(({ input }) => {
            return { message: `Hello ${input.name}!` };
        })
});
