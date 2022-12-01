import { useState } from "react";
import { object, string } from "zod";
import { trpc } from "../utils/trpc";

export const tweetSchema = object({
    text: string({
        required_error: "Tweet text is required",
    })
    .min(10)
    .max(280),
})

export const CreateTweet = () => {
  const [text, setText] = useState("");

  const { mutateAsync } = trpc.tweet.create.useMutation();
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="" id="" cols={30} rows={10}></textarea>
    </form>
  );
};
