import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const jobRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().min(1),
        companyName: z.string().min(1),
        companyImage: z.string().min(1),
        locations: z.array(z.string()).optional(),
        remoteLocations: z.array(z.string()).optional(),
        isRemote: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        minSalary: z.number().optional(),
        maxSalary: z.number().optional(),
        offerLink: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.job.create({
        data: {
          userId: ctx.userId,
          name: input.name,
          description: input.description,
          companyName: input.companyName,
          companyImage: input.companyImage,
          locations: input.locations,
          remoteLocations: input.remoteLocations,
          isRemote: input.isRemote,
          tags: input.tags,
          minSalary: input.minSalary,
          maxSalary: input.maxSalary,
          offerLink: input.offerLink,
        },
      });
    }),

  getJobPublicData: publicProcedure.query(async ({ ctx }) => {
    const job = await ctx.db.job.findFirst({
      orderBy: { createdAt: "desc" },
    });

    const jobPublicData = {
      id: job?.id,
      name: job?.name,
      companyName: job?.companyName,
      companyImage: job?.companyImage,
      locations: job?.locations,
      remoteLocations: job?.remoteLocations,
      isRemote: job?.isRemote,
      tags: job?.tags,
      minSalary: job?.minSalary,
      maxSalary: job?.maxSalary,
      offerLink: job?.offerLink,
      createdAt: job?.createdAt,
    };

    return jobPublicData ?? null;
  }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const job = await ctx.db.job.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return job ?? null;
  }),
});
