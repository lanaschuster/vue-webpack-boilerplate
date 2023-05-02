import httpClient from '@/http/axios-setup';
import { GetProductsRepository } from '../product/repository/getProductsRepository';
import { ProductController } from '../product/controller/productController';
import { GetProductsUseCase } from '../product/domain/usecase/getProductsUseCase';

const getProductsRepository = new GetProductsRepository(httpClient);
const getProductsUseCase = new GetProductsUseCase(getProductsRepository);

export const productController = (context) => new ProductController(
  context,
  getProductsUseCase
);
