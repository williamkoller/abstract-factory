import { ConcreteProduct } from './concrete-product';
import { Creator } from './creator';
import { Product } from './interface/product.interface';

export class ConcreteCreator extends Creator {
  protected factoryMethod(): Product {
    return new ConcreteProduct();
  }
}
