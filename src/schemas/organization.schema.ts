import Joi from "joi";

export const organizationRegisterSchema = Joi.object({
    name: Joi.string().required().min(3).max(30),
    departmentId: Joi.string().required().min(3).max(100),
})