import { Sequelize } from "sequelize";
import userModel from './user.model.js';
import contactModel from './contact.model.js';

const sequelize = new Sequelize(
    'francis',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const User = userModel(sequelize, Sequelize);
const Contact = contactModel(sequelize, Sequelize);


export { User, Contact };
