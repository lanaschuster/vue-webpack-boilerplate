import { ProductPagination } from '../domain/model/product';

export class GetProductsRepository {
  constructor(httpClientInstance) {
    this.httpClient = httpClientInstance;
  }

  async execute(pagination) {
    const response = await this.httpClient.get('/products', {
      params: pagination
    });
  
    const productPagination = new ProductPagination(response);
    return productPagination;
  }
}
