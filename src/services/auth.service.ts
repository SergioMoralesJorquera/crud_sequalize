import { User } from "../models/auth.model";
import bycrypt from "bcryptjs"
import { generateAccessToken } from "../util/auth.util";
import { HttpError } from "../util/httpError.util";
import { Response } from "express";


const login = async (email: string, password:string) =>{
    // 1. verificar que existe el usuario
    const user = await User.findOne({where: {email}});

    if (!user) {
        throw new HttpError("User not found aqui", 400);
    }

    // 2. comparar los hash de contraseña
    const isValidPassword = await bycrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw new HttpError("Password incorrect", 400);
    }

    // 3. generar el token
    const token = generateAccessToken(user.email, user.id);

    return token;

}

const register = async (res: Response , email: string, password:string) =>{
    const user = await User.findOne({where: {email}});

    if (user) {
        throw new HttpError("Email already exists", 400);     
    }

    const salt = await bycrypt.genSalt(10);
    const passwordHashed = await bycrypt.hash(password, salt);

    // Crear el nuevo usuario
    const newUser = await User.create({
        email,
        password: passwordHashed,
    });

    return newUser;

}

export const authService = {
    login,
    register
}