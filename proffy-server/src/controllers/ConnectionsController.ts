import { Request, Response } from 'express';

import CreateConnectionService from '../services/connections/CreateConnectionService';
import ListConnectionsService from '../services/connections/ListConnectionsService';

class ConnectionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listConnections = new ListConnectionsService();

    const totalConnections = await listConnections.execute();

    return response.json({ total: totalConnections });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;
    const createConnection = new CreateConnectionService();

    const connection = await createConnection.execute(user_id);

    return response.status(201).json(connection);
  }
}

export default ConnectionsController;
