// src/services/UserService.ts
import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';
import { UserResource } from '../resource/UserResource';

const prisma = new PrismaClient();

export class UserService {

  static async processUserRegistration(data: { name: string; email: string; password: string }) {
    return prisma.$transaction(async () => {
      const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
      if (existingUser) {
        return {
          success: false,
          message: 'Email already in use.',
          data: null,
          status_code: 400
        };
      }

      const hashedPassword = await bcrypt.hash(data.password, 10);
      const user = await prisma.user.create({
        data: { name: data.name, email: data.email, password: hashedPassword },
      });

      return {
        success: true,
        message: 'User created successfully.',
        data: UserResource.toJson(user),
      };
    });
  }

  static async processUserLogin(data: { email: string; password: string }) {
  const { email, password } = data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return { success: false, message: 'Invalid credentials', data: null, status_code: 401 };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { success: false, message: 'Invalid credentials', data: null, status_code: 401 };
  }

  return { success: true, message: 'Login successful', data: UserResource.toJson(user), status_code: 200 };
}

}
