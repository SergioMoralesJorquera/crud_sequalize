import { Optional } from 'sequelize';
import { Table, Model, Column, Default, HasMany, PrimaryKey, DataType, AllowNull } from 'sequelize-typescript';
import {School as ISchool} from '../interfaces/school.interface';
import { Student } from './student.model';

interface SchoolCreationAttributes extends Optional<ISchool, 'id'> {}

@Table
export class School extends Model<ISchool, SchoolCreationAttributes> {
    
    @PrimaryKey
    @Default(DataType.UUIDV4) // UUID generado automáticamente
    @Column(DataType.UUID)
    declare id:string;

    @AllowNull
    @Column(DataType.STRING)
    declare name: string;

    @AllowNull
    @Column(DataType.STRING)
    declare socialWorker: string;

    @AllowNull
    @Column(DataType.STRING)
    declare speechTherapist: string;

    @HasMany(() => Student)
    declare student: Student[];

}