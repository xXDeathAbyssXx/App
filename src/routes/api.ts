import { Router } from "express";
import { Add, Clear, Remove, Update, Replace, Find } from "../database/util/methods";
import { eError, tError, rError, sError, rfError } from "../handlers/throw";
const colors = require("colors")
const log = console.log;

const router: Router = Router();

import { apicontroller } from '../controllers/apiController';

router.get(`/api/${process.env.VERSION}/account`, apicontroller.account);
router.get(`/api/${process.env.VERSION}/account/register`, apicontroller.registerGet);
router.post(`/api/${process.env.VERSION}/account/register`, apicontroller.registerPost);

module.exports = router;