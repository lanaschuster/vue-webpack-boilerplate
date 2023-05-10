import { Product, ProductPagination } from '../domain/model/product';
export class ProductController {
  constructor(
    context,
    getProductsUseCase,
    createProductsUseCase
  ) {
    this.context = context;
    this.getProductsUseCase = getProductsUseCase;
    this.createProductsUseCase = createProductsUseCase;

    this.params = {
      order: 'ASC',
      sort: '',
      page: 1,
      itemsPerPage: 5,
      search: ''
    };

    this.product = new Product({});
    this.productPagination = new ProductPagination();
    this.loading = false;
    // demais variáveis necessárias aqui
  }

  async getAll() {
    this.productPagination = await this.getProductsUseCase.execute(this.params);
  }

  async save() {
    this.loading = true;
    const created = await this.createProductsUseCase.execute(this.product);
    this.product = new Product({});
    this.loading = false;

    return created;
  }
}
