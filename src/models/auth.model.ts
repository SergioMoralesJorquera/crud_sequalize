import { Optional } from 'sequelize';
import { Table, Model, Column, Default, PrimaryKey, DataType } from 'sequelize-typescript';
import {User as IUser} from '../interfaces/user.interface';

interface UserCreationAttributes extends Optional<IUser, 'id'> {}

@Table
export class User extends Model<IUser, UserCreationAttributes> {
    
    @PrimaryKey
    @Default(DataType.UUIDV4) // UUID generado automáticamente
    @Column(DataType.UUID)
    declare id:string;

    @Column(DataType.STRING)
    declare email: string;

    @Column(DataType.STRING)
    declare password: string;
}