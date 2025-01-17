import dotenv from 'dotenv';
import { Sequelize } from "sequelize-typescript";
import { User } from "../models/auth.model";
import { Department } from "../models/department.model";
import { Organization } from "../models/organization.model";
import { StudentOrganization } from '../models/studentOrganization.model';
import { Student } from '../models/student.model';
import { School } from '../models/school.model';

dotenv.config();

const sequelize = new Sequelize({
  dialect: process.env.DIALECT as any, // Dialecto para PostgreSQL
  database: process.env.DATABASE, // Cambia esto por tu nombre de base de datos
  username: 'postgres', // Usuario de la base de datos
  password: process.env.PASSWORD as string, // Contraseña de la base de datos
  host: process.env.HOST, // Dirección del servidor PostgreSQL
  port: process.env.PORTDB as any, // Puerto por defecto de PostgreSQL
  models: [User, Department, Student, Organization, StudentOrganization, School], // Modelos a utilizar
});

export default sequelize;