import { getRepository, Repository } from 'typeorm';

import Connection from '../../entities/Connection';

class CreateConnectionsService {
  private ormRepository: Repository<Connection>;

  constructor() {
    this.ormRepository = getRepository(Connection);
  }

  public async execute(user_id: string): Promise<Connection> {
    const connection = this.ormRepository.create({ user_id });

    await this.ormRepository.save(connection);

    return connection;
  }
}

export default CreateConnectionsService;
