import { Request, Response } from 'express';

class ClassesSchedulesController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }
}

export default new ClassesSchedulesController();
