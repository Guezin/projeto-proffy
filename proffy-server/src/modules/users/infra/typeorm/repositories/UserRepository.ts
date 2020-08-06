import { getRepository, Repository } from 'typeorm';

import IUserDTO from '@modules/users/dtos/IUserDTO';
import IUserRepository from '@modules/users/repositories/IUserRepository';

import User from '../entities/User';

class UserRespository implements IUserRepository<User> {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(userData: IUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }
}

export default UserRespository;
