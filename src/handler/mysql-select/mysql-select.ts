import { createMysqlConnection } from '../../db/mysql/mysql'

export const handler = async () => {
  const connection = await createMysqlConnection()
  await connection.query('select 1')
  await connection.close()
  return true
}
