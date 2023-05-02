import { Pagination } from '@/modules/pagination/domain/model/pagination';

export class GetProductsUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(params) {
    const pagination = new Pagination({
      order: params.order ?? 'ASC',
      sort: params.sort,
      page: params.page,
      itemsPerPage: params.itemsPerPage,
      search: params.search
    });

    const productPagination = await this.repository.execute(pagination);
    return productPagination;
  }
}
