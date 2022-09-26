import { Request, Response } from 'express';
import path from "path";
const colors = require("colors")
import { eError, tError, rError, sError, rfError } from "../handlers/throw";
import { Add, Clear, Remove, Update, Replace, Find } from "../database/util/methods";
import settings from '../handlers/settings';
const log = console.log;

class apiController {

  public async account(req: Request, res: Response) {
    if (req.headers.authorization === undefined) return res.send("Invalid Account.")
    const authorizationData = req.headers.authorization.split(" ")
    const db = await Find("Account", [])
    const allData = db["all"]
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].authorization == authorizationData[1]) {
        res.json({ User: allData[i].login, Password: allData[i].password })
      }
    }
  }

  public async registerGet(req: Request, res: Response) {
    res.sendFile(path.join(__dirname, `../../../src/views/index.html`));
  }

  public async registerPost(req: Request, res: Response) {
    const login: string = req.body.login;
    if (login === "" || login === undefined) return res.send("Register cancelled.")
    const loginCheck = await Find("Account", [login])
    if (!(loginCheck.one === null)) return res.send("This user already exist.")
    const password: string = req.body.password;
    if (password === "" || password === undefined) return res.send("Register cancelled.")
    const token = btoa(`${login}:${password}`);
    await Add("Account", false, [login, password, token]);
    res.send("Successful Registration.")
  }

}

export const apicontroller = new apiController();









