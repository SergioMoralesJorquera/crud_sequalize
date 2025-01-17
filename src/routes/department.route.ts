import {Router} from "express";
import {departmentController}  from "./../controllers/department.controller";

const router = Router();

router.post("/register", departmentController.register);

export default router;