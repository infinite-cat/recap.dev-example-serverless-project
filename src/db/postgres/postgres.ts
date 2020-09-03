import { createConnection } from 'typeorm'
import { map } from 'lodash-es'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

import * as entities from '../../entity/mysql'

export const createPostgresConnection = () => {
  const config: PostgresConnectionOptions = {
    name: 'default',
    type: 'postgres',
    host: process.env.postgresHost,
    port: 5432,
    username: process.env.postgresUser,
    password: process.env.postgresPassword,
    database: process.env.postgresDb,
    logging: false,
    // @ts-ignore
    entities: [...map(entities)],
    synchronize: false,
  }

  return createConnection(config)
}
