import { Request, Response, NextFunction } from "express";
import { studentService } from "../services/student.service";
import { studentRegisterSchema, studentUpdateSchema } from "../schemas/student.schema";
import { HttpError } from "../util/httpError.util";
import { UUID } from "crypto";

const register = async(req: Request, res: Response, next:NextFunction) => {
    try {
        const {error, value} = studentRegisterSchema.validate(req.body);        

        if(error){
            throw new HttpError(error.message, 400);
        }

        const { name, lastname, date, email, phone, address, schoolId } = value;
        const organizationId = req.query.organizationId as UUID;
        const newStudent = await studentService.register(name, lastname, date, email, phone, address, schoolId, organizationId);
        
        res.json({newStudent});

    } catch(error){
        next(error);
    }
}

const getAllStudent = async(req: Request, res: Response, next:NextFunction) => {
    try {

        const schoolId = req.query.schoolId as string;
        const organizationId = req.query.organizationId as string;
        const students = await studentService.getAllStudent(schoolId, organizationId);
        
        res.json({students});

    } catch(error){
        next(error);
    }
}

const updateStudent = async(req: Request, res: Response, next:NextFunction) => {
    try {
        const {error, value} = studentUpdateSchema.validate(req.body);
        const id  = req.params.id as UUID;

        if(error){
            throw new HttpError(error.message, 400);
        }

        const { name, lastname, date, email, phone, address } = value;
        const updatedStudent = await studentService.updateStudent(id, name, lastname, date, email, phone, address);
        
        res.json({updatedStudent});
    }
    catch(error){
        next(error);
    }
}

const deleteStudent = async(req: Request, res: Response, next:NextFunction) => {
    try {
        const id  = req.params.id as UUID;
        const student = await studentService.deleteStudent(id);
        
        res.json({student});
    }
    catch(error){
        next(error);
    }
}


export const studentController = {register, getAllStudent, updateStudent, deleteStudent}