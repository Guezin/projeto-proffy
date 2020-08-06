import { Request, Response } from 'express';

class ClassesController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }
}

export default new ClassesController();
