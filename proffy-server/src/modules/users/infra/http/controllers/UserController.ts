import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, avatar, whatsapp, bio } = request.body;
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ name, avatar, whatsapp, bio });

    return response.json(user);
  }
}

export default UserController;
