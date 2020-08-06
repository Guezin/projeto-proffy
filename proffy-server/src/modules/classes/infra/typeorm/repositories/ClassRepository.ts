import { getRepository, Repository } from 'typeorm';

import Class from '@modules/classes/infra/typeorm/entities/Class';

import IClassDTO from '@modules/classes/dtos/IClassDTO';
import IClassRepository from '@modules/classes/repositories/IClassRepository';

class ClassRepository implements IClassRepository {
  private ormRepository: Repository<Class>;

  constructor() {
    this.ormRepository = getRepository(Class);
  }

  public async create(classData: IClassDTO): Promise<Class> {
    const _class = this.ormRepository.create(classData);

    await this.ormRepository.save(_class);

    return _class;
  }
}

export default ClassRepository;
