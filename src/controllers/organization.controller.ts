import { Request, Response, NextFunction } from "express";
import { organizationService } from "../services/organization.service";
import { organizationRegisterSchema } from "../schemas/organization.schema";
import { HttpError } from "../util/httpError.util";

const register = async(req: Request, res: Response, next:NextFunction) => {
    try {
        const {error, value} = organizationRegisterSchema.validate(req.body);

        if(error){
            throw new HttpError(error.message, 400);
        }

        const { name, departmentId } = value;
        const newOrganization = await organizationService.register(name, departmentId);
        res.json({newOrganization});

    } catch(error){
        next(error);
    }
}
export const organizationController = {register}