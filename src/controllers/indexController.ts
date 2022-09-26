import { Request, Response } from 'express';


class IndexController {

  public async index(req: Request, res: Response) {
    res.send("API V1")
  }

}

export const indexController = new IndexController();