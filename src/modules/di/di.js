import httpClient from '@/http/axios-setup';
import { ProductController } from '../product/controller/productController';
import { GetProductsRepository } from '../product/repository/getProductsRepository';
import { GetProductsUseCase } from '../product/domain/usecase/getProductsUseCase';
import { CreateProductsRepository } from '../product/repository/createProductsRepository';
import { CreateProductsUseCase } from '../product/domain/usecase/createProductsUseCase';

const getProductsRepository = new GetProductsRepository(httpClient);
const getProductsUseCase = new GetProductsUseCase(getProductsRepository);

const createProductRepository = new CreateProductsRepository(httpClient);
const createProductsUseCase = new CreateProductsUseCase(createProductRepository);

export const productController = (context) => new ProductController(
  context,
  getProductsUseCase,
  createProductsUseCase
);
