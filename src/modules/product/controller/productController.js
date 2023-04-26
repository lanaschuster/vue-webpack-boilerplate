import { Product, ProductPagination } from '../domain/model/product';

export class ProductController {
  constructor(
    context,
    getProductsUseCase
  ) {
    this.context = context;
    this.getProductsUseCase = getProductsUseCase;

    this.params = {
      order: 'ASC',
      sort: '',
      page: 1,
      itemsPerPage: 5,
      search: ''
    };

    this.product = new Product({});
    this.productPagination = new ProductPagination();
    this.headers = {};
    // demais variáveis necessárias aqui
  }

  async getAll() {
    this.productPagination = await this.getProductsUseCase.execute(this.params);
  }
}
