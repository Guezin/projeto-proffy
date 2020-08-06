import Class from '../infra/typeorm/entities/Class';

import IClassDTO from '@modules/classes/dtos/IClassDTO';

export default interface IClassRepository {
  create({ user_id, subject, cost }: IClassDTO): Promise<Class>;
}
