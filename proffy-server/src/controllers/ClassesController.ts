import { Request, Response } from 'express';

import CreateClassService from '../services/CreateClassService';

class ClassController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;
    const createClass = new CreateClassService();

    try {
      const message = await createClass.execute({
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule,
      });

      return response.status(201).json({ message });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default new ClassController();
