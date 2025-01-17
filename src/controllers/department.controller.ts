import { Request, Response, NextFunction } from "express";
import { departmentService } from "./../services/department.service";
import { departmentRegisterSchema } from "./../schemas/department.schema";
import { HttpError } from "../util/httpError.util";

const register = async(req: Request, res: Response, next:NextFunction) => {
    try {
        const {error, value} = departmentRegisterSchema.validate(req.body);

        if(error){
            throw new HttpError(error.message, 400);
        }

        const { name } = value;
        const newDepartment = await departmentService.register(name);
        res.json({newDepartment});

    } catch(error){
        next(error);
    }
}
export const departmentController = {register}