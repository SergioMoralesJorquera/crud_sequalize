import Joi from "joi";

export const departmentRegisterSchema = Joi.object({
    name: Joi.string().required().min(3).max(30),
})