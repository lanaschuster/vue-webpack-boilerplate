import { Product } from '../domain/model/product';

export class CreateProductsRepository {
  constructor(httpClientInstance) {
    this.httpClient = httpClientInstance;
  }

  async execute(product) {
    const response = await this.httpClient.post('/products', product);  
    return new Product(response.data ?? {});
  }
}
