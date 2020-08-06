import IUserDTO from '../dtos/IUserDTO';

import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
  create({ name, avatar, whatsapp, bio }: IUserDTO): Promise<User>;
}
