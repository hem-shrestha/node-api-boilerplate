module.exports = {
  development: {
    username: 'user',
    password: 'P@ssw0rd123',
    database: 'db',
    host: 'zerone-stable-addon-806-15-postgresql.zerone-stable-503-806.svc.cluster.local',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'boilerplate_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: null
  },
  production: process.env.DATABASE_URL
};
