import { Request, Response } from 'express';

import CreateClassService from '../services/classes/CreateClassService';
import ListClassesService from '../services/classes/ListClassesService';

type IFilters = {
  week_day: string;
  subject: string;
  time: string;
};

class ClassController {
  public async index(request: Request, response: Response): Promise<Response> {
    const filters = request.query as IFilters;
    const listClasses = new ListClassesService();

    try {
      const classes = await listClasses.execute(filters);

      return response.json(classes);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

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

export default ClassController;
