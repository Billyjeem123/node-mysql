// src/services/UserService.ts
import { PrismaClient } from '../generated/prisma';
import { PostResource } from '../resource/PostResource';

const prisma = new PrismaClient();

export class PostService {

  static async create(data: { content: string, title:string, user_id: number }) {

     
    return prisma.$transaction(async () => {
      
      const post = await prisma.post.create({
        data: {
          content: data.content,
          title: data.title,
          userId: data.user_id // Placeholder user ID'
        },
      });

      return {
        success: true,
        message: 'Post created successfully.',
        data: PostResource.toJson(post),
        status_code: 200,
      };
    });
  }


  // Fetch all posts belonging to a user
  static async getPostsByUser(userId: number) {
    const posts = await prisma.post.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" }, // optional: newest first
    });

    return {
      success: true,
      message: posts.length
        ? "User posts fetched successfully"
        : "No posts found for this user",
      data: (PostResource.collection(posts)),
      status_code: 200,
    };
  }



}
