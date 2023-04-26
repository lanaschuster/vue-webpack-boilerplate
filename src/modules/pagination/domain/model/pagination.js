export class Pagination {
  constructor({
    page,
    itemsPerPage,
    sort,
    order,
    search
  }) {
    this.page = page;
    this.itemsPerPage = itemsPerPage;
    this.sort = sort;
    this.order = order;
    this.search = search;
  }
}
