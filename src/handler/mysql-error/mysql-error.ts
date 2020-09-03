import { createMysqlConnection } from '../../db/mysql/mysql'

export const handler = async () => {
  const connection = await createMysqlConnection()

  try {
    await connection.query('update 1')
  } finally {
    await connection.close()
  }
  return true
}
