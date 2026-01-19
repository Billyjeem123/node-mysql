// src/services/UserService.ts
import { PrismaClient } from '../generated/prisma'
import { ProductResource } from '../resource/ProductResource'
import { paginate } from '../utility/validate'

const prisma = new PrismaClient()

export class ProductService {
  static async create (data: {
    product_name: string
    product_image: string
    quantity: number
    user_id: number
  }) {
    return prisma.$transaction(async () => {
      const post = await prisma.product.create({
        data: {
          product_name: data.product_name,
          product_image: data.product_image,
          quantity: data.quantity,
          user_id: data.user_id
        },
        include: {
          user: true // <-- load the user relationship
        }
      })

      return {
        success: true,
        message: 'Product created successfully.',
        data: ProductResource.toJson(post),
        status_code: 200
      }
    })
  }

  static async getUserProduct (req, userId: number) {
    const page = parseInt(req.query.page ?? '1')
    const perPage = parseInt(req.query.per_page ?? '10')
    const result = await paginate(
      prisma.product,
      page,
      perPage,
      { user_id: userId },
      { user: true }
    )

    return {
      success: true,
      message: result.data.length
        ? 'User products fetched successfully'
        : 'No products found for this user',
      data: ProductResource.collection(result.data),
      pagination: result.pagination,
      status_code: 200
    }
  }
}
