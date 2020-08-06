import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClassService from '@modules/classes/services/CreateClassService';

class ClassController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, subject, cost } = request.body;
    const createClass = container.resolve(CreateClassService);

    const _class = await createClass.execute({
      user_id,
      subject,
      cost,
    });

    return response.json(_class);
  }
}

export default ClassController;
