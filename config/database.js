import { Sequelize } from 'sequelize';
import { env } from './index.js';

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
});

export default sequelize;
