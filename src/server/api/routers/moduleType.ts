import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const moduleTypeRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        isFirst: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.moduleType.create({
        data: {
          name: input.name,
          description: input.description,
          isFirst: input.isFirst ?? false,
        },
      });
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.moduleType.findUnique({
        where: { id: input.id },
        include: {
          modules: true,
        },
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        description: z.string().optional(),
        isFirst: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.moduleType.update({
        where: { id: input.id },
        data: {
          name: input.name,
          description: input.description,
          isFirst: input.isFirst,
        },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.moduleType.delete({
        where: { id: input.id },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.moduleType.findMany({
      include: {
        modules: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }),
});
