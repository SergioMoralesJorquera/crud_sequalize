import { Student } from "../models/student.model";
import { StudentOrganization } from "../models/studentOrganization.model";
import { UUID } from "crypto";
import { Organization } from '../models/organization.model';
import { Department } from '../models/department.model';
import { School } from "../models/school.model";
import { HttpError } from "../util/httpError.util";

const register = async (name: string, lastname: string, date: string, email: string, phone: string, address: string, schoolId:UUID, organizationId:UUID) =>{

    // Crear el nuevo usuario
    const newStudent = await Student.create({
        name,
        lastname,
        date,
        email,
        phone,  
        address,    
        schoolId
    });

    await StudentOrganization.create({
        studentId: newStudent.id,
        organizationId
    });

    /*const studentWithOrganization = await Student.findByPk(newStudent.id, {
        include: [
            {model: School},
            { 
                model: Organization,
                include: [{ model: Department }]
            }
        ]
    });

    return studentWithOrganization;*/

    return newStudent;
}

const getAllStudent = async (schoolId?: string, organizationId?: string) => { 

    const whereClause: any = {};
    if (schoolId) whereClause.schoolId = schoolId;

    const includeClause: any = [{
        model: School
    }];

    if (organizationId) {
        includeClause.push({
            model: Organization,
            through: { attributes: [] },
            where: { id: organizationId },
            include: [Department]
        });
    } else {
        includeClause.push({
            model: Organization,
            through: { attributes: [] },
            include: [Department]
        });
    }

    // Verificar si el schoolId existe
    if (schoolId) {
        const schoolExists = await School.findByPk(schoolId);
        if (!schoolExists) {
            throw new HttpError("School not found", 404);
        }
    }

    // Verificar si el organizationId existe
    if (organizationId) {
        const organizationExists = await Organization.findByPk(organizationId);
        if (!organizationExists) {
            throw new HttpError("Organization not found", 404);
        }
    }

    const students = await Student.findAll({
        where: whereClause,
        include: includeClause
    });
    
    return students;
}

const updateStudent = async (id: UUID, name: string, lastname: string, date: string, email: string, phone: string, address: string) => {
    
    const [updatedRows] = await Student.update(
        { name, lastname, date, email, phone, address },
        { where: { id } }
    );

    if (updatedRows === 0) {
        throw new HttpError("Student not found", 404);
    }

    const updatedStudent = await Student.findByPk(id, {
        include: [{
            model: Organization,
            include: [Department]
        }]
    });

    return updatedStudent;
}

const deleteStudent = async (id: UUID) => {
    const student = await Student.findByPk(id);

    if (!student) {
        throw new HttpError("Student not found", 404);
    }

    await student.destroy();

    return student;
}

export const studentService = {
    register,
    getAllStudent,
    updateStudent, 
    deleteStudent
}