import dotenv from 'dotenv';
import app from "./app"
import sequelize from './config/connection';

dotenv.config();

const port = process.env.PORT || 3001;

const main = async()=>{
    try {
        await sequelize.sync({ alter: true }); // Sincroniza la base de datos y modifica las tablas existentes
        console.log("Connection has been established successfully.");
        app.listen(port, ()=> console.log(`Server running in port: ${port}`));
    } catch (error) {
        console.error(error);
    }
}

main();