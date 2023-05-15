import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const helloRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ ctx, input }) => {
      return {
        message: `Hello ${input.name}!`,
      };
    }),
});
