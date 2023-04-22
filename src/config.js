const DEFAULT_PORT = 3000;
const joi = require('joi');

const configSchema = joi.object({
  PORT: joi.number().default(DEFAULT_PORT),
  DB_URI: joi.string().required()
}).unknown().required();

const validateConfig = joi.attempt(process.env, configSchema);

const config = {
  port: validateConfig.PORT,
  dbURI: validateConfig.DB_URI
};

module.exports = config;