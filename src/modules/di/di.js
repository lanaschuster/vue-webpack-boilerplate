import httpClient from '@/http/axios-setup';
import { GetProductsRepository } from '../product/repository/getProductsRepository';
import { ProductController } from '../product/controller/productController';

const getProductsRepository = new GetProductsRepository(httpClient);

export const productController = (context) => new ProductController(
  context,
  getProductsRepository
);
