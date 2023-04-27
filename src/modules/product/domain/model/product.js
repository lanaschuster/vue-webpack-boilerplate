export class Product {
  constructor({
    id,
    title,
    description,
    price,
    image
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}

export class ProductPagination {
  constructor(response = {}) {
    this.items = response.data
      ? response.data.map(product => new Product(product))
      : [];
    
    this.total = response.data
      ? response.data.length
      : 0;
  }
}
