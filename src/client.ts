import { ConcreteCreator } from './concrete-creator';
import { Creator } from './creator';

function client(creator: Creator) {
  console.log(`Client: I'm not ware of the creator's class`);
  console.log(creator.operation());
}

const concreteCreator = new ConcreteCreator();

client(concreteCreator);
