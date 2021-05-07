import {Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import initBookingModel from "./bookings.mjs";
import initCarModel from "./cars.mjs";

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {}

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Car = initCarModel(sequelize, Sequelize.DataTypes);
db.Booking = initBookingModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;