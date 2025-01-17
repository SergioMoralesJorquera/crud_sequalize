import { Department } from "../models/department.model";


const register = async (name: string) =>{

    const newDepartment = await Department.create({
        name,
    });

    return newDepartment;

}

export const departmentService = {
    register
}