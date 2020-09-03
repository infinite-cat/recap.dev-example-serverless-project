import { createConnection } from 'typeorm'
import { map } from 'lodash-es'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import * as entities from '../../entity/mysql'

export const createMysqlConnection = () => {
  const config: MysqlConnectionOptions = {
    name: 'default',
    type: 'mysql',
    host: process.env.mysqlHost,
    port: 3306,
    username: process.env.mysqlUser,
    password: process.env.mysqlPassword,
    database: process.env.mysqlDb,
    logging: false,
    // @ts-ignore
    entities: [...map(entities)],
    synchronize: false,
    timezone: 'Z',
    extra: {
      connectionLimit: 1,
    },
  }

  return createConnection(config)
}
