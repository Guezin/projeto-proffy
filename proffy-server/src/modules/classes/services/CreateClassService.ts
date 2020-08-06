import { injectable, inject } from 'tsyringe';

import Class from '@modules/classes/infra/typeorm/entities/Class';

import IClassRepository from '../repositories/IClassRepository';

interface IRequest {
  user_id: string;
  subject: string;
  cost: number;
}

@injectable()
class CreateClassService {
  constructor(
    @inject('ClassRepository')
    private classRepository: IClassRepository
  ) {}

  public async execute({ user_id, subject, cost }: IRequest): Promise<Class> {
    const _class = await this.classRepository.create({
      user_id,
      subject,
      cost,
    });

    return _class;
  }
}

export default CreateClassService;
