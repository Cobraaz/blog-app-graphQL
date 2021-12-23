import { Post, Prisma } from "@prisma/client";
import { Context } from "../index";

interface postCreate {
  title: string;
  content: string;
}

interface PostPayloadType {
  userErrors: {
    message: string;
  }[];
  post: Post | Prisma.Prisma__PostClient<Post> | null;
}

export const Mutation = {
  postCreate: async (
    _: any,
    { title, content }: postCreate,
    { prisma }: Context
  ): Promise<PostPayloadType> => {
    if (!title || !content) {
      return {
        userErrors: [
          {
            message: "You must provide title and content to create a post",
          },
        ],
        post: null,
      };
    }
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: 1,
      },
    });
    console.log(post);
    return {
      userErrors: [],
      post,
    };
  },
};
