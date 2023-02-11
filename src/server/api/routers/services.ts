import { createTRPCRouter, publicProcedure } from "../trpc";

export const servicesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.service.findMany();
  }),
});
