import { Optional } from 'sequelize';
import { Table, Model, Column, Default, PrimaryKey, DataType, HasMany } from 'sequelize-typescript';
import {Department as IDepartment} from '../interfaces/department.interface';
import { Organization } from '../models/organization.model';

interface DepartmentCreationAttributes extends Optional<IDepartment, 'id'> {}

@Table
export class Department extends Model<IDepartment, DepartmentCreationAttributes> {
    
    @PrimaryKey
    @Default(DataType.UUIDV4) // UUID generado automáticamente
    @Column(DataType.UUID)
    declare id:string;

    @Column(DataType.STRING)
    declare name: string;

    @HasMany(() => Organization)
    declare organization: Organization[];
}