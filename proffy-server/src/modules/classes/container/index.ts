import { container } from 'tsyringe';

import IClassRepository from '@modules/classes/repositories/IClassRepository';
import ClassRepository from '@modules/classes/infra/typeorm/repositories/ClassRepository';

container.registerSingleton<IClassRepository>(
  'ClassRepository',
  ClassRepository
);
