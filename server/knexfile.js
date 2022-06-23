// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: "127.0.0.1",
      port: 5432,
      user: "postgres",
      password: "docker",
      database: "movie_list",
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: "ec2-23-23-151-191.compute-1.amazonaws.com",
      database: 'dcq9t1i5ksbanh',
      user:     'vhxkbkclipzqcn',
      password: '7453eb68bb75c6ca07df6efcd22c4f885b980e5ed5564fb2e84f6ee3c088c03e',
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
