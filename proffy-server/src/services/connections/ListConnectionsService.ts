import { getRepository, Repository } from 'typeorm';

import Connection from '../../entities/Connection';

class ListConnectionsService {
  private ormRepository: Repository<Connection>;

  constructor() {
    this.ormRepository = getRepository(Connection);
  }

  public async execute(): Promise<number> {
    const totalConnections = await this.ormRepository.count();

    return totalConnections;
  }
}

export default ListConnectionsService;
