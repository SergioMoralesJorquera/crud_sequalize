import {Router} from "express";
import {studentController}  from "../controllers/student.controller";
import { verifyToken } from "../middleware/jwt.middleware";

const router = Router();

router.post("/", verifyToken, studentController.register);
router.get("/", verifyToken, studentController.getAllStudent);
router.put("/:id", verifyToken, studentController.updateStudent);
router.delete("/:id", verifyToken, studentController.deleteStudent);

export default router;