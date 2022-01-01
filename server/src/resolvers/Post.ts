import { userLoader } from './../loaders/userLoader';
import { Context } from "..";

interface PostParentType {
  authorId: number;
}

export const Post = {
  user: (parent: PostParentType, __: any, { prisma }: Context) => {
    return userLoader.load(parent.authorId)
  },
};
