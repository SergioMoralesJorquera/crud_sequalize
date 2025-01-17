import { Table, Model, Column, DataType, ForeignKey, Default, PrimaryKey } from 'sequelize-typescript';
import { Organization } from './organization.model';
import { Student } from './student.model';
import { Optional } from 'sequelize';
import { StudentOrganization as IstudentOrganization } from '../interfaces/studentOrganization.interface'; 

interface StudentOrganizationCreationAttributes extends Optional<IstudentOrganization, 'id'> {}

@Table
export class StudentOrganization extends Model <IstudentOrganization, StudentOrganizationCreationAttributes>{
    
    @PrimaryKey
    @Default(DataType.UUIDV4) // UUID generado automáticamente
    @Column(DataType.UUID)
    declare id:string;
    
    @ForeignKey(() => Student)
    @Column(DataType.UUID)
    declare studentId: string;
  
    @ForeignKey(() => Organization)
    @Column(DataType.UUID)
    declare organizationId: string;
}