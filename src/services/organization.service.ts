import { UUID } from "crypto";
import { Organization } from "../models/organization.model";


const register = async (name: string, departmentId: UUID) =>{

    const neworganization = await Organization.create({
        name,
        departmentId
    });

    return neworganization;

}

export const organizationService = {
    register
}