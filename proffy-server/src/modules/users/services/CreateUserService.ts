import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';

import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute({
    name,
    avatar,
    whatsapp,
    bio,
  }: IRequest): Promise<User> {
    const user = this.userRepository.create({
      name,
      avatar,
      whatsapp,
      bio,
    });

    return user;
  }
}

export default CreateUserService;
