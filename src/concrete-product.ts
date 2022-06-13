import { Product } from './interface/product.interface';

export class ConcreteProduct implements Product {
  public operation(): string {
    return 'ConcreteProduct: Operation';
  }
}
