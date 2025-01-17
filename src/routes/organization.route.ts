import {Router} from "express";
import {organizationController}  from "../controllers/organization.controller";

const router = Router();

router.post("/register", organizationController.register);

export default router;