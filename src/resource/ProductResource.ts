// resources/ProductResource.js

export class ProductResource {
  // Convert a single product to JSON
  static toJson(product) {
    return {
      type: "products",
      id: product.id, 
      attributes: {
        product_name: product.product_name ?? "",
        product_image: product.product_image ?? "",
        quantity: product.quantity ?? 0,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      },
      relationships: {
        user: {
          id: product.user?.id,
          first_name: product.user?.first_name ?? "",
          last_name: product.user?.last_name ?? "",
        },
      },
    };
  }

  // Convert an array of products
  static collection(products) {
    return products.map((product) => this.toJson(product));
  }
}
