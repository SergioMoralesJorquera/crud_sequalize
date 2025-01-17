import { Optional } from 'sequelize';
import { Table, Model, Column, Default, PrimaryKey, BelongsToMany,DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import {Organization as IOrganization} from '../interfaces/organization.interface';
import { Department } from './department.model';
import { Student } from './student.model';
import { StudentOrganization } from './studentOrganization.model';  

interface OrganizationCreationAttributes extends Optional<IOrganization, 'id'> {}

@Table
export class Organization extends Model<IOrganization, OrganizationCreationAttributes> {
    
    @PrimaryKey
    @Default(DataType.UUIDV4) // UUID generado automáticamente
    @Column(DataType.UUID)
    declare id:string;

    @Column(DataType.STRING)
    declare name: string;

    @ForeignKey(() => Department)
    @Column(DataType.UUID)
    declare departmentId: string;

    @BelongsTo(() => Department)
    declare department: Department;

    @BelongsToMany(() => Student, () => StudentOrganization)
    declare student: Student[];
}