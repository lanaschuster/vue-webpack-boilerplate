export class CreateProductsUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(product) {
    const createdProduct = await this.repository.execute(product);
    return createdProduct;
  }
}
