import Joi, { date } from "joi";

export const studentRegisterSchema = Joi.object({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    date: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    schoolId:Joi.string().trim().min(6).required(),
})

export const studentUpdateSchema = Joi.object({
    name: Joi.string(),
    lastname: Joi.string(),
    date: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.string(),
    address: Joi.string(),
})