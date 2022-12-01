import { z } from "zod";
import { tweetSchema } from "../../../components/createTweet";
import { protectedProcedure, router } from "../trpc";

export const tweetRouter = router({
  create: protectedProcedure.input(tweetSchema).mutation((ctx, input) => {
    const { prisma } = ctx;
    const { text } = input;
    return prisma.tweet.create({
      data: {
        text,
        author: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }),
});
