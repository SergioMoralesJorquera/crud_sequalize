import { Optional } from 'sequelize';
import { Table, Model, Column, ForeignKey, Default, BelongsTo,BelongsToMany, PrimaryKey, DataType, AllowNull } from 'sequelize-typescript';
import {Student as IStudent} from '../interfaces/student.interface';
import { Organization } from './organization.model';
import { StudentOrganization } from './studentOrganization.model';
import { School } from './school.model';

interface StudentCreationAttributes extends Optional<IStudent, 'id'> {}

@Table
export class Student extends Model<IStudent, StudentCreationAttributes> {
    
    @PrimaryKey
    @Default(DataType.UUIDV4) // UUID generado automáticamente
    @Column(DataType.UUID)
    declare id:string;

    @AllowNull
    @Column(DataType.STRING)
    declare name: string;

    @AllowNull
    @Column(DataType.STRING)
    declare lastname: string;

    @AllowNull
    @Column(DataType.STRING)
    declare date: string;

    @AllowNull
    @Column(DataType.STRING)
    declare email: string;

    @AllowNull
    @Column(DataType.STRING)
    declare phone: string;

    @AllowNull
    @Column(DataType.STRING)
    declare address: string;

    @BelongsToMany(() => Organization, () => StudentOrganization)
    organization!: Array<Organization & {StudentOrganization: StudentOrganization}>;

    @ForeignKey(() => School)
    @Column(DataType.UUID)
    declare schoolId: string;

    @BelongsTo(() => School)
    school!: School;
}