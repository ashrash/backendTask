import { Sequelize } from 'sequelize';

import { DB_HOST, DB_PASSWORD, DB_USERNAME } from '../config';

const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/slash`);

export default sequelize;