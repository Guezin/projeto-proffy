import { Request, Response } from 'express';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }
}

export default new UserController();
