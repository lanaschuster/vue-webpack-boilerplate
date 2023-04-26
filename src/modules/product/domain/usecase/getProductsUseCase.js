import { GetProductsRepository } from '../../repository/getProductsRepository';
import { Pagination } from '@/modules/pagination/domain/model/pagination';

export class GetProductsUseCase {
  constructor(repository = null) {
    this.repository = repository ?? new GetProductsRepository();
  }

  async execute(params) {
    const pagination = new Pagination({
      order: params.order ?? 'ASC',
      sort: params.sort,
      page: params.page,
      itemsPerPage: params.itemsPerPage,
      search: params.search
    });

    const productPagination = await this.repository(pagination);
    return productPagination;
  }
}
